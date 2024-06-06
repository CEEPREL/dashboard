import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import employees from "../../../constants/data";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function BasicCard() {
  let totalEmployee = employees.length + 1;
  return (
    <Card
      className="flex relative bg-gradient-to-tl to-70% from-gray-200 to-gray-50 border-2 rounded-xl  flex-col"
      sx={{ minWidth: 200 }}
    >
      <CardContent>
        <Typography className=" text-lg" variant="h5" component="div">
          Total Employees
        </Typography>
      </CardContent>
      <div className="flex h-20 z-10 -skew-y-6 bg-gray-200 rounded-tr-2xl w-full -bottom-32 border-2" />
      <CardActions className="flex absolute bottom-0 z-20 gap-24  ">
        <Button size="small">
          <h1 className="border-b-[1px] text-primary border-b-primary">
            View all employees
          </h1>
        </Button>
        <div className=" text-4xl">{totalEmployee}</div>
      </CardActions>
    </Card>
  );
}
