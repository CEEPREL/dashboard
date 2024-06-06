import React from "react";
import PeopleOnLeave from "./PeopleOnLeave";
import GenderBarChart from "./BarChart";
import RevenueLineChart from "./LineChart";

function Index() {
  return (
    <div className="gap-4 flex flex-col w-[63%]">
      <PeopleOnLeave />
      <GenderBarChart />
      <RevenueLineChart />
    </div>
  );
}

export default Index;
