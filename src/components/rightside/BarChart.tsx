"use client";
import React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import UndoOutlinedIcon from "@mui/icons-material/UndoOutlined";
import { BarChart, BarChartProps } from "@mui/x-charts/BarChart";
import employees from "../../../constants/data";

import Button from "@mui/material/Button";

interface Leave {
  sickLeave: number;
  travelLeave: number;
  annualLeave: number;
}

interface Employee {
  name: string;
  dob: string;
  dateOfResumption: string;
  dateOfLeave: string;
  dateOfStart: string;
  position: string;
  department: string;
  gender: string;
  leaves: Leave;
  isNew: boolean;
  isPresent: boolean;
}

export function BasicButtonGroup() {
  const [alignment, setAlignment] = React.useState("birthdays");

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment);
  };

  const handleClick = (value: string) => {
    setAlignment(value);
  };
  return (
    <div
      className="flex h-10 gap-5 w-72 rounded-full items-center justify-between bg-gray-200"
      // color="primary"
      // value={alignment}
      // onChange={() => handleChange}
      aria-label="Platform"
    >
      <Button
        className={`w-[65%] h-[80%] text-black text-[11px] ${
          alignment === "birthdays" ? "bg-white" : ""
        } rounded-3xl`}
        value={alignment}
        onClick={() => handleClick("birthdays")}
      >
        People Per Department
      </Button>
      <Button
        className={`w-[30%]  h-[80%] text-black z-10 text-[11px] ${
          alignment === "jobAnniversary" ? "bg-white" : ""
        }  p-0 m-0 rounded-full`}
        value={alignment}
        onClick={() => handleClick("jobAnniversary")}
      >
        Turn Over
      </Button>
    </div>
  );
}

const processEmployeeData = (employees: Employee[]) => {
  const departmentGenderCounts: Record<
    string,
    { male: number; female: number; notSpecified: number }
  > = {};

  employees.forEach((employee) => {
    const department = employee.department;
    const gender = employee.gender;

    if (!departmentGenderCounts[department]) {
      departmentGenderCounts[department] = {
        male: 0,
        female: 0,
        notSpecified: 0,
      };
    }

    if (gender === "male") {
      departmentGenderCounts[department].male += 1;
    } else if (gender === "female") {
      departmentGenderCounts[department].female += 1;
    } else {
      departmentGenderCounts[department].notSpecified += 1;
    }
  });

  return departmentGenderCounts;
};

const departmentGenderCounts = processEmployeeData(employees);

const departments = Object.keys(departmentGenderCounts);
const maleData = departments.map((dept) => departmentGenderCounts[dept].male);
const femaleData = departments.map(
  (dept) => departmentGenderCounts[dept].female
);
const notSpecifiedData = departments.map(
  (dept) => departmentGenderCounts[dept].notSpecified
);

const barChartsParams: BarChartProps = {
  series: [
    {
      id: "male",
      data: maleData,
      label: "Male",
      stack: "total",
      color: "#4FC3F7",
      highlightScope: {
        highlighted: "item",
      },
    },
    {
      id: "female",
      data: femaleData,
      label: "Female",
      stack: "total",
      color: "#FFB74D",
      highlightScope: {
        highlighted: "item",
      },
    },
    {
      id: "notSpecified",
      data: notSpecifiedData,
      label: "Not Specified",
      stack: "total",
      color: "#E0E0E0",
      highlightScope: {
        highlighted: "item",
      },
    },
  ],
  xAxis: [{ data: departments, scaleType: "band", id: "axis1" }],
  height: 400,
  grid: {
    horizontal: true,
  },
};

export default function GenderBarChart() {
  const [itemData, setItemData] = React.useState<any>(null);
  const [axisData, setAxisData] = React.useState<any>(null);

  return (
    <div className=" p-2 border-2 rounded-xl">
      <BasicButtonGroup />
      <Stack
        className="w-[650px]"
        direction={{ xs: "column", md: "row" }}
        spacing={{ xs: 0, md: 4 }}
        sx={{ width: "100%" }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <BarChart
            {...barChartsParams}
            onItemClick={(event, d) => setItemData(d)}
            onAxisClick={(event, d) => setAxisData(d)}
          />
        </Box>
      </Stack>
    </div>
  );
}
