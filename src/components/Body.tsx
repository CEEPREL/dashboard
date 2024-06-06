import React from "react";
import SearchField from "./SearchField";
import LeftSide from "./leftSide/LeftSide";
import RightSide from "./rightside/RightSide";

function Body() {
  return (
    <div className=" w-[70%] flex-col flex">
      <div className="w-full">
        {" "}
        <SearchField />
      </div>

      <div className="w-full flex justify-between flex-row">
        <LeftSide />
        <RightSide />
      </div>
    </div>
  );
}

export default Body;
