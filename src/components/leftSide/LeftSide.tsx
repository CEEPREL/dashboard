import React from "react";
import TotalEmployeeCard from "./TotalEmployeeCard";
import AttendanceCard from "./AttendanceCard";
import Celebrations from "./Celebrations";
import GenderPieChart from "./GenderPieChart";

function Index() {
  return (
    <div className=" gap-4 flex flex-col w-[33%]">
      <TotalEmployeeCard />
      <AttendanceCard />
      <Celebrations />
      <GenderPieChart />
    </div>
  );
}

export default Index;
