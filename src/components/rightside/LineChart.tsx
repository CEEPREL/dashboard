"use client";
import React, { useState } from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Image from "next/image";
import image from "../../assets/arrow_down.svg";

export function BasicButtonGroup() {
  const [alignment, setAlignment] = useState("peoplePerDepartment");

  const handleClick = (value: string) => {
    setAlignment(value);
  };

  return (
    <div
      className="flex h-10 gap-5 w-72 rounded-full items-center justify-between bg-gray-200"
      aria-label="Platform"
    >
      <Button
        className={`w-[65%] h-[80%] text-black text-[11px] ${
          alignment === "peoplePerDepartment" ? "bg-white" : ""
        } rounded-3xl`}
        onClick={() => handleClick("peoplePerDepartment")}
      >
        People Per Department
      </Button>
      <Button
        className={`w-[30%] h-[80%] text-black z-10 text-[11px] ${
          alignment === "turnOver" ? "bg-white" : ""
        } p-0 m-0 rounded-full`}
        onClick={() => handleClick("turnOver")}
      >
        Turn Over
      </Button>
    </div>
  );
}

export default function RevenueLineChart() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // Sample random data
  const departments = [
    "Tech",
    "Admin",
    "Customer Support",
    "Operations",
    "Frontdesk",
    "Logistics",
  ];

  const data1 = Array.from({ length: departments.length }, () =>
    Math.floor(Math.random() * 30 + 1)
  );

  const data2 = Array.from({ length: departments.length }, () =>
    Math.floor(Math.random() * 30 + 1)
  );

  return (
    <div className="p-2 border-2 rounded-xl">
      <div className="flex flex-row justify-between">
        <BasicButtonGroup />
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <div
            className="flex flex-row bg-gray-200 rounded-xl p-2"
            aria-label="last-6-months"
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            Last 6 months
            <Image src={image} alt="down" />
          </div>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Last 3 months</MenuItem>
            <MenuItem onClick={handleClose}>Last 6 months</MenuItem>
            <MenuItem onClick={handleClose}>Last 12 months</MenuItem>
          </Menu>
        </Stack>
      </div>

      <Box sx={{ width: "100%", padding: 2 }}>
        <LineChart
          xAxis={[{ data: departments }]}
          series={[
            {
              data: data1,
              label: "Male",
              color: "#4FC3F7",
            },
            {
              data: data2,
              label: "Female",
              color: "#FFB74D",
            },
          ]}
          height={300}
          margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
          grid={{ vertical: true, horizontal: true }}
        />
      </Box>
    </div>
  );
}
