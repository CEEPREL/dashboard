"use client";
import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import arrowDown from "../assets/arrow_down.svg";
import Image from "next/image";

const options = ["people", "Software", "marketer"];

export default function DropDown() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (
    e: React.MouseEvent<HTMLElement>,
    index: number
  ) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="w-32">
      <List
        className="p-0 m-0 rounded-xl text-xs"
        component="nav"
        aria-label="Device settings"
        sx={{ bgcolor: "background.paper" }}
      >
        <ListItemButton
          className="h-7 rounded-xl bg-gray-200 "
          id="lock-button"
          aria-haspopup="listbox"
          aria-controls="lock-menu"
          aria-label="when device is locked"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClickListItem}
        >
          <span className="pr-1 right-0 absolute">
            <Image src={arrowDown} alt="down" />
          </span>
          <ListItemText
            className="rounded-xl ml-3 p-2 absolute"
            primary={options[selectedIndex]}
            secondary=""
          />
          <span className=" bg-cyan-200 rounded-xl p-[2px] mr-4 ">%</span>
        </ListItemButton>
      </List>
      <Menu
        className="rounded-xl text-xs"
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "lock-button",
          role: "listbox",
        }}
      >
        {options.map((option, index) => (
          <MenuItem
            className="rounded-xl"
            key={option}
            // disabled={index === 0}
            selected={index === selectedIndex}
            onClick={(e) => handleMenuItemClick(e, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
