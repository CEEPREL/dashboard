import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import employees from "../../../constants/data";

interface Employee {
  name: string;
  dob: string;
  dateOfResumption: string;
  dateOfLeave: string;
  dateOfStart: string;
  position: string;
  // leaves: Leave;
  isNew: boolean;
  isPresent: boolean;
}

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export function Bar() {
  // Calculate the number of present employees
  const presentEmployees = employees.filter(
    (employee) => employee.isPresent
  ).length;
  const onLeave = employees.filter(
    (employee) =>
      employee.leaves.annualLeave ||
      employee.leaves.sickLeave ||
      employee.leaves.travelLeave != 0
  ).length;

  // Calculate the percentages based on the total number of employees
  const absentEmployee = employees.length - presentEmployees;
  const presentPercentage = (presentEmployees / employees.length) * 100;
  const absentPercentage = 100 - presentPercentage;
  const onLeavePeercent = (onLeave / employees.length) * 100;

  return (
    <div className="flex justify-center p-4 items-center flex-row w-full">
      <div
        className="bg-purple-200 text-transparent h-4 z-20 -mr-3 rounded-full"
        style={{ width: `${presentPercentage}%` }}
      >
        {presentEmployees}
      </div>

      <div
        className="bg-pink-200 text-transparent h-4 -mr-3 z-10 rounded-full"
        style={{ width: `${absentPercentage}%` }}
      >
        {employees.length - presentEmployees}
      </div>
      <div
        className="bg-orange-200 text-transparent h-4 -mr-3 z-10 rounded-full"
        style={{ width: `${onLeavePeercent}%` }}
      >
        {employees.length - presentEmployees}
      </div>
    </div>
  );
}

export default function BasicCard() {
  let totalEmployee = employees.length;
  return (
    <Card
      className="flex border-2 rounded-xl p-2  flex-col gap-1 "
      sx={{ minWidth: 275 }}
    >
      <CardContent>
        <Typography
          className="flex justify-center"
          sx={{ fontSize: 14 }}
          color="text.secondary"
          gutterBottom
        >
          27, Monday January, 2021
        </Typography>
        <Typography className="flex justify-center text-xl">
          Today’s Attendance
        </Typography>
      </CardContent>
      <div className="flex items-center">
        <Bar />
      </div>
      <div className="flex flex-row justify-around mx-5 items-center">
        <div className="flex gap-3 flex-row justify-between items-center">
          <span className="w-2 bg-purple-200 h-2"></span>
          <h1> Present </h1>
        </div>
        <div className="flex flex-row gap-3 items-center">
          <span className="w-2 h-2 bg-pink-200"></span>
          <h1>Absent </h1>
        </div>
        <div className="flex gap-3 flex-row justify-between items-center">
          <span className="w-2 h-2 bg-orange-200"></span>
          <h1>Out of Work </h1>
        </div>
      </div>
      <CardActions className="flex border-t-[1px] justify-center">
        <Button size="small">
          <h1 className=" text-primary">View In Time & Attendance</h1>
        </Button>
      </CardActions>
    </Card>
  );
}
