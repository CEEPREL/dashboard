"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { PieChart } from "@mui/x-charts/PieChart";
import employees from "../../../constants/data";
import { DefaultizedPieValueType } from "@mui/x-charts/models";

const data = [
  { label: "Group A", value: 400, color: "#0088FE" },
  { label: "Group B", value: 300, color: "#00C49F" },
  { label: "Group C", value: 300, color: "#FFBB28" },
  // { label: "Group D", value: 200, color: "#FF8042" },
];

const sizing = {
  margin: { right: 5 },
  width: 300,
  height: 300,
  legend: { hidden: true },
};
const TOTAL = data.map((item) => item.value).reduce((a, b) => a + b, 0);

const getArcLabel = (params: DefaultizedPieValueType) => {
  const percent = params.value / TOTAL;
  return `${(percent * 100).toFixed(0)}%`;
};

export function PieChartWithCustomizedLabel() {
  return (
    <div className="relative items-center justify-center flex">
      <PieChart
        className="w-[10%]"
        series={[
          {
            outerRadius: 140,
            innerRadius: 80,
            data,
            paddingAngle: 3,
            cornerRadius: 5,
            // arcLabel: getArcLabel,
          },
        ]}
        {...sizing}
      />
      <h1 className="absolute w-20 text-center text-3xl">36 People</h1>
    </div>
  );
}

export default function GenderPieChart() {
  return (
    <div className="flex border-2 rounded-xl p-2 flex-col">
      <h1 className=" text-center text-xl">Employee Gender Distribution</h1>
      <h3 className=" text-center text-sm pb-4">
        Here is a breakdown of gender distribution
      </h3>
      <PieChartWithCustomizedLabel />
      <div className="flex flex-row justify-around mx-5 items-center">
        <div className="flex gap-3 flex-row justify-between items-center">
          <span className="w-2 bg-purple-200 h-2"></span>
          <h1> Male </h1>
        </div>
        <div className="flex flex-row gap-3 items-center">
          <span className="w-2 h-2 bg-pink-200"></span>
          <h1>Female </h1>
        </div>
        <div className="flex gap-3 flex-row justify-between items-center">
          <span className="w-2 h-2 bg-orange-200"></span>
          <h1>Not Specified </h1>
        </div>
      </div>
    </div>
  );
}
