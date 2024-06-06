import React from "react";
import Image from "next/image";
import employees from "../../../constants/data";
import image from "../../assets/img.jpg";

const formatDateToDayMonth = (dateString: string) => {
  const date = new Date(dateString);
  return `${date.getDate()} ${date.toLocaleString("default", {
    month: "short",
  })}`;
};

const leaveTypes: {
  [key: string]: { label: string; bgColor: string; textColor: string };
} = {
  sickLeave: {
    label: "Sick Leave",
    bgColor: "bg-orange-50",
    textColor: "bg-orange-300",
  },
  travelLeave: {
    label: "Travel Leave",
    bgColor: "bg-cyan-50",
    textColor: "bg-cyan-300",
  },
  annualLeave: {
    label: "Maternity Leave",
    bgColor: "bg-purple-50",
    textColor: "bg-purple-300",
  },
};

export default function PeopleOnLeave() {
  const employeesWithLeaves = employees.filter(
    (employee) =>
      employee.leaves.sickLeave > 0 ||
      employee.leaves.travelLeave > 0 ||
      employee.leaves.annualLeave > 0
  );

  return (
    <div className="border-[1px] rounded-lg p-4">
      <div className="flex flex-col">
        <h1 className="text-xl">Employee Gender Distribution</h1>
        <h3 className="text-xs pb-4">
          Here is a breakdown of gender distribution
        </h3>
        <div className="flex overflow-x-auto gap-2">
          {employeesWithLeaves.map((employee, index) => {
            const nameSplit = employee.name.split(" ");
            return Object.entries(employee.leaves).map(
              ([leaveType, value]) =>
                value > 0 && (
                  <div
                    key={`${index}-${leaveType}`}
                    className={`flex-shrink-0 flex justify-between items-center w-[140px] rounded-[20px] p-2 flex-col ${leaveTypes[leaveType].bgColor}`}
                  >
                    <div className="flex gap-4 items-center flex-col">
                      <div className="rounded-full">
                        <Image
                          className="w-10 h-10 rounded-full"
                          src={image}
                          alt=""
                        />
                      </div>
                      <div className="flex text-center flex-col">
                        <h1>{nameSplit[0]}</h1>
                        <h1>{nameSplit[1]}</h1>
                        <h5 className="text-[10px]">{employee.position}</h5>
                        <div className="flex flex-col gap-1">
                          <div
                            className={`p-1 mt-2 rounded-lg ${leaveTypes[leaveType].textColor}`}
                          >
                            <h5 className={`text-[10px] text-black`}>
                              {leaveTypes[leaveType].label}
                            </h5>
                          </div>
                        </div>
                        <h5 className="text-[10px]">
                          {formatDateToDayMonth(employee.dateOfLeave)}
                        </h5>
                        <h5 className="text-[10px]">{value} Day(s)</h5>
                      </div>
                    </div>
                  </div>
                )
            );
          })}
        </div>
      </div>
    </div>
  );
}
