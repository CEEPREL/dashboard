"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../assets/logo.svg";
import DropDown from "./Dropdown";
import {
  HomeIcon,
  FourBox,
  InfoIcon,
  NotificationIcon,
  LineIcon,
} from "./Svgs";

type IconNames = "HomeIcon" | "FourBox" | "InfoIcon" | "NotificationIcon";

type IconProps = {
  size?: number;
  color?: string;
  onClick?: (event: React.MouseEvent<SVGElement, MouseEvent>) => void;
};

type IconsMapType = {
  [key in IconNames]: React.FC<IconProps>;
};

const iconsMap: IconsMapType = {
  HomeIcon: HomeIcon,
  FourBox: FourBox,
  InfoIcon: InfoIcon,
  NotificationIcon: NotificationIcon,
};

const icons: IconNames[] = [
  "HomeIcon",
  "FourBox",
  "InfoIcon",
  "NotificationIcon",
];

const Header: React.FC = () => {
  const [selected, setSelected] = useState<number | null>(0);

  const handleClick = (index: number) => {
    setSelected(index);
  };

  return (
    <div className="flex justify-between flex-row">
      <div className="flex gap-4 flex-row">
        <Image alt="logo" src={logo} />
        <DropDown />
      </div>
      <div></div>
      <div className="flex gap-10 flex-row">
        {icons.map((iconName, index) => {
          const IconComponent = iconsMap[iconName];
          const color = selected === index ? "#2898A4" : "#D9D9D9";
          return (
            <div
              key={index}
              className="cursor-pointer"
              onClick={() => handleClick(index)}
            >
              <IconComponent color={color} />
            </div>
          );
        })}
        <div className="flex flex-row justify-evenly">
          <LineIcon />
          <h1 className="flex mx-3 rounded-lg text-amber-800 items-center justify-center w-8 h-8 bg-orange-100">
            w
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
