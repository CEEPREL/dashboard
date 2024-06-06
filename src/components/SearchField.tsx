"use client";
import React from "react";
import employees from "../../constants/data";
import Button from "@mui/material/Button";
import arrowDown from "../assets/arrow_down_white.svg";
import Image from "next/image";
import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import { Dropdown } from "@mui/base/Dropdown";
import { Menu } from "@mui/base/Menu";
import { MenuButton as BaseMenuButton } from "@mui/base/MenuButton";
import { MenuItem as BaseMenuItem, menuItemClasses } from "@mui/base/MenuItem";
import { styled } from "@mui/system";
import image from "../assets/img.jpg";

interface Leave {
  sickLeave?: number;
  travelLeave?: number;
  annualLeave?: number;
}

interface Employee {
  name: string;
  dob: string;
  dateOfResumption?: string;
  dateOfLeave?: string;
  dateOfStart?: string;
  position?: string;
  leaves?: Leave;
  isNew?: boolean;
}

const menuItems = [
  "Add People",
  "Import People List",
  "Add Timeoff",
  "Add Benefit",
  "Add Training",
  "Upload Document",
  "Create Task",
  "Add Department",
];

export function MenuSimple() {
  const createHandleMenuClick = (menuItem: string) => {
    return () => {};
  };

  return (
    <Dropdown>
      <MenuButton className="h-full  w-40 text-white border-none flex flex-row bg-white">
        <div className=" bg-primary text-xs h-full p-5 rounded-l-lg flex items-center hover:bg-cyan-600">
          Add New
        </div>

        <div className="text-sm w-7 py-4 ml-1 flex items-center justify-center rounded-r-lg bg-primary hover:bg-cyan-600">
          <Image src={arrowDown} alt="down" />
        </div>
      </MenuButton>
      <Menu slots={{ listbox: Listbox }}>
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            className="border-b-2 border-gray-200"
            onClick={createHandleMenuClick(item)}
          >
            {item}
          </MenuItem>
        ))}
      </Menu>
    </Dropdown>
  );
}

const blue = {
  50: "#F0F7FF",
  100: "#C2E0FF",
  200: "#99CCF3",
  300: "#66B2FF",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E6",
  700: "#0059B3",
  800: "#004C99",
  900: "#003A75",
};

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};

const Listbox = styled("ul")(
  ({ theme }) => `
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 6px;
  margin: 12px 0;
  min-width: 200px;
  border-radius: 12px;
  overflow: auto;
  outline: 0px;
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  box-shadow: 0px 4px 6px ${
    theme.palette.mode === "dark" ? "rgba(0,0,0, 0.50)" : "rgba(0,0,0, 0.05)"
  };
  z-index: 1;
  `
);

const MenuItem = styled(BaseMenuItem)(
  ({ theme }) => `
  list-style: none;
  padding: 8px;
  border-radius: 8px;
  cursor: default;
  user-select: none;



  &:focus {
    outline: 3px solid ${theme.palette.mode === "dark" ? blue[600] : blue[200]};
    background-color: ${theme.palette.mode === "dark" ? grey[800] : grey[100]};
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  }

  &.${menuItemClasses.disabled} { 
    color: ${theme.palette.mode === "dark" ? grey[700] : grey[400]};
  }
  `
);

const MenuButton = styled(BaseMenuButton)(
  ({ theme }) => `
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.5;
  padding: 8px 16px;
  border-radius: 8px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
  color: ${theme.palette.mode === "dark" ? grey[200] : grey[900]};
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);

  &:hover {
    background: ${theme.palette.mode === "dark" ? grey[800] : grey[50]};
    border-color: ${theme.palette.mode === "dark" ? grey[600] : grey[300]};
  }

  &:active {
    background: ${theme.palette.mode === "dark" ? grey[700] : grey[100]};
  }

  &:focus-visible {
    box-shadow: 0 0 0 4px ${
      theme.palette.mode === "dark" ? blue[300] : blue[200]
    };
    outline: none;
  }
  `
);

const filter = createFilterOptions<Employee>();

export default function FreeSoloCreateOption() {
  const [value, setValue] = React.useState<Employee | null>(null);

  return (
    <div className="my-10 h-[30px] items-center flex justify-between flex-row">
      <Autocomplete
        className="w-[55%] border bg-gray-200 rounded-xl"
        value={value}
        onChange={(event, newValue) => {
          if (typeof newValue === "string") {
            setValue({
              name: newValue,
            } as Employee);
          } else {
            setValue(newValue);
          }
        }}
        filterOptions={(options, params) => {
          const filtered = filter(options, params);
          const { inputValue } = params;

          if (
            inputValue !== "" &&
            !options.some((option) => option.name === inputValue)
          ) {
            filtered.push({
              name: `Add "${inputValue}"`,
            } as Employee);
          }

          return filtered;
        }}
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        id="free-solo-with-text-demo"
        options={employees}
        getOptionLabel={(option) => {
          if (typeof option === "string") {
            return option;
          }
          return option.name;
        }}
        renderOption={(props, option) => (
          <li className=" m-3 " {...props}>
            <div className="rounded-full">
              <Image
                className="w-10 p-2 h-10 rounded-full"
                src={image}
                alt=""
              />
            </div>
            {option.name}
          </li>
        )}
        sx={{ width: 300 }}
        freeSolo
        renderInput={(params) => <TextField {...params} placeholder="John" />}
      />

      <div className="flex gap-2 w-[40%] justify-end flex-row h-full">
        <MenuSimple />
      </div>
    </div>
  );
}
