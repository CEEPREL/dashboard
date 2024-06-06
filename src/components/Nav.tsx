"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { navItems } from "../../constants/data";

function samePageLinkNavigation(
  event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
) {
  if (
    event.defaultPrevented ||
    event.button !== 0 ||
    event.metaKey ||
    event.ctrlKey ||
    event.altKey ||
    event.shiftKey
  ) {
    return false;
  }
  return true;
}

interface LinkTabProps {
  label?: string;
  href?: string;
  selected?: boolean;
}

function LinkTab(props: LinkTabProps) {
  return (
    <Tab
      component="a"
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        // Routing libraries handle this, you can remove the onClick handle when using them.
        if (samePageLinkNavigation(event)) {
          event.preventDefault();
        }
      }}
      aria-current={props.selected && "page"}
      {...props}
    />
  );
}

export default function Nav() {
  const [value, setValue] = React.useState(0);
  const colorOne = "#2898A4";
  const colortwo = "#545454";
  const colorthree = "#EAF8FA";

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    // event.type can be equal to focus with selectionFollowsFocus.
    if (
      event.type !== "click" ||
      (event.type === "click" &&
        samePageLinkNavigation(
          event as React.MouseEvent<HTMLAnchorElement, MouseEvent>
        ))
    ) {
      setValue(newValue);
    }
  };

  return (
    <Box
      className="flex justify-center border-b-2 border-gray-400"
      sx={{ width: "100%" }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="nav tabs example"
        role="navigation"
        textColor="secondary"
        TabIndicatorProps={{
          style: {
            backgroundColor: colorOne,
          },
        }}
        sx={{
          "& .MuiTab-root": {
            color: colortwo,
            "&.Mui-selected": {
              color: colorOne,
              borderBottom: "3px solid",
              background: colorthree,
            },
          },
        }}
      >
        {navItems.map((item, index) => (
          <LinkTab key={index} label={item.label} href={item.href} />
        ))}
      </Tabs>
    </Box>
  );
}
