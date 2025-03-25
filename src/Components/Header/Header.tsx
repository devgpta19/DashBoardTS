import React from "react";
import { Stack, Box } from "@mui/material";
import Profile from "./HeaderComponents/Profile";
import Notification from "./HeaderComponents/Notification";
import EditDashboard from "./HeaderComponents/EditDashboard";
import DropDown from "./HeaderComponents/DropDown";
import Search from "./HeaderComponents/Search";
import data from "./HeaderComponents/Data.json";
import "./Header.scss";

const ThreeSections: React.FC = () => {
  return (
    <Stack className="section-stack" sx={{ bgcolor: "var(--primary-color)" }}>
      <Box className="section-box section-one">
        <h6 className="gradient-text">Hi, {data.name}</h6>
      </Box>
      <Box className="section-box section-two">
        <Search />
      </Box>
      <Box className="section-box section-three">
        <DropDown />
        <EditDashboard />
        <Notification count={data.count} />
        <Profile />
      </Box>
    </Stack>
  );
};

export default ThreeSections;
