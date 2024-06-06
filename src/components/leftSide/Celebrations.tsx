"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import employees from "../../../constants/data";
import image from "../../assets/img.jpg";
import birthday from "../../assets/birthday.svg";
import arrowDown from "../../assets/arrow_down.svg";
import Image from "next/image";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

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
      className="flex h-10 gap-5 rounded-full items-center justify-between bg-gray-200"
      // color="primary"
      // value={alignment}
      // onChange={() => handleChange}
      aria-label="Platform"
    >
      <Button
        className={`w-[30%] h-[80%] text-black text-[11px] ${
          alignment === "birthdays" ? "bg-white" : ""
        } rounded-3xl`}
        value={alignment}
        onClick={() => handleClick("birthdays")}
      >
        Birthdays
      </Button>
      <Button
        className={`w-[40%]  h-[80%] text-black z-10 text-[11px] ${
          alignment === "jobAnniversary" ? "bg-white" : ""
        }  p-0 m-0 rounded-full`}
        value={alignment}
        onClick={() => handleClick("jobAnniversary")}
      >
        Job Anniversary
      </Button>
      <Button
        className={`w-[30%] ${
          alignment === "newHire" ? "bg-white" : ""
        } text-[11px] text-black rounded-full`}
        value={alignment}
        onClick={() => handleClick("newHire")}
      >
        New Hire{" "}
      </Button>
    </div>
  );
}

// Employee Birthday card
export function BirthdayInfo() {
  return (
    <div className="flex p-2  flex-col">
      <h2>Today</h2>
      <div className="flex  h-[220px] gap-2 overflow-y-auto flex-col">
        <div className="flex justify-between bg-indigo-100 items-center rounded-[20px] p-2 flex-row ">
          <div className="flex gap-4 flex-row">
            <div className="rounded-full">
              <Image className="w-10 h-10 rounded-full" src={image} alt="" />
            </div>
            <div className="flex flex-col">
              <h1>{employees[0].name}</h1>
              <h5 className="text-[10px]">{employees[0].position}</h5>
            </div>
          </div>
          <div className="flex right-0 gap-1 items-center flex-col">
            <Image className="w-7 h-7 rounded-full" src={birthday} alt="" />
            <h5 className="text-xs">{employees[0].dob}</h5>
          </div>
        </div>
        <div className="flex justify-between bg-indigo-100 items-center rounded-[20px] p-2 flex-row ">
          <div className="flex gap-4 flex-row">
            <div className="rounded-full">
              <Image className="w-10 h-10 rounded-full" src={image} alt="" />
            </div>
            <div className="flex flex-col">
              <h1>{employees[0].name}</h1>
              <h5 className="text-[10px]">{employees[0].position}</h5>
            </div>
          </div>
          <div className="flex right-0 gap-1 items-center flex-col">
            <Image className="w-7 h-7 rounded-full" src={birthday} alt="" />
            <h5 className="text-xs">{employees[0].dob}</h5>
          </div>
        </div>
        <div className="flex justify-between bg-indigo-100 items-center rounded-[20px] p-2 flex-row ">
          <div className="flex gap-4 flex-row">
            <div className="rounded-full">
              <Image className="w-10 h-10 rounded-full" src={image} alt="" />
            </div>
            <div className="flex flex-col">
              <h1>{employees[0].name}</h1>
              <h5 className="text-[10px]">{employees[0].position}</h5>
            </div>
          </div>
          <div className="flex right-0 gap-1 items-center flex-col">
            <Image className="w-7 h-7 rounded-full" src={birthday} alt="" />
            <h5 className="text-xs">{employees[0].dob}</h5>
          </div>
        </div>
        <div className="flex justify-between bg-indigo-100 items-center rounded-[20px] p-2 flex-row ">
          <div className="flex gap-4 flex-row">
            <div className="rounded-full">
              <Image className="w-10 h-10 rounded-full" src={image} alt="" />
            </div>
            <div className="flex flex-col">
              <h1>{employees[0].name}</h1>
              <h5 className="text-[10px]">{employees[0].position}</h5>
            </div>
          </div>
          <div className="flex right-0 gap-1 items-center flex-col">
            <Image className="w-7 h-7 rounded-full" src={birthday} alt="" />
            <h5 className="text-xs">{employees[0].dob}</h5>
          </div>
        </div>
      </div>
      <div className="flex justify-between flex-row">
        <h1 className="">Upcoming Birthdays</h1>{" "}
        <span className="flex items-center justify-center">
          <Image src={arrowDown} alt="down" />
        </span>
      </div>
    </div>
  );
}

export default function Celebrations() {
  let totalEmployee = employees.length;
  return (
    <Card
      className="flex border-2 rounded-xl p-2  flex-col gap-1 "
      sx={{ minWidth: 275 }}
    >
      <CardContent>
        <Typography className="flex text-xl">Celebrations</Typography>
      </CardContent>
      <BasicButtonGroup />
      <BirthdayInfo />
      <CardActions className="flex justify-center"></CardActions>
    </Card>
  );
}
