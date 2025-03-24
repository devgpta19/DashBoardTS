import React from "react";
import { Box } from "@mui/material";
import './Charts.scss';
import SessionsChart from "./LineChart/SessionsChart";
import BarChart from "../Charts/BarChart/Barchart";

const GridLayout: React.FC = () => {
  return (
    <Box className="BoxLayout">
      <Box className="BoxItem Boxleft">
        <SessionsChart/>
      </Box>
      <Box className="BoxItem Boxright">
        <BarChart/>
      </Box>
    </Box>
  );
};

export default GridLayout;
