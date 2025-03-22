import React from "react";
import Search from "./Search";
import "../Header.scss";
// import Market from "./Market";
// import Dropdown from "./DropDown";

const Section2: React.FC = () => {
  return (
    <div className="Section2">
      <h6 className="gradient-text">Hello, Anubhav</h6>

      {/* <Dropdown /> */}

      <Search />
    </div>
  );
};

export default Section2;
