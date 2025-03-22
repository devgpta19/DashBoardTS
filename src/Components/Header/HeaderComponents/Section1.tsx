import * as React from "react";
import Section3 from "./Profile";
import Notification from "./Notification";
import EditDashboard from "./EditDashboard";
import DropDown from "./DropDown";
import "../Header.scss";

const Section1: React.FC = () => {
  const count = (): number => {
    return 1;
  };

  return (
    <div className="section1">
      <div className="section1__container2">
        <div className="section3">
          <DropDown />
          <EditDashboard />
          <Notification count={count()} />
        </div>
      </div>

      <div className="section1__container1">
        <Section3 />
      </div>
    </div>
  );
};

export default Section1;