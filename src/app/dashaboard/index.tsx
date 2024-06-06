import React from "react";
import Nav from "../../components/Nav";
import Header from "../../components/Header";
import Body from "../../components/Body";

function Dashaboard() {
  return (
    <div>
      <Header />
      <Nav />
      <div className="flex flex-row justify-center items-center">
        <Body />
      </div>
    </div>
  );
}

export default Dashaboard;
