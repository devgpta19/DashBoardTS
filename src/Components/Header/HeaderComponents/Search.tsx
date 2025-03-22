import React from "react";
import { InputBase, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "../Header.scss";

const SearchBar: React.FC = () => {
  return (
    <Box sx={{ color: "#fff" }} className="search-container">
      <SearchIcon className="search-icon" />
      <InputBase
        sx={{ color: "#fff" }}
        className="search-input"
        placeholder="Search..."
      />
    </Box>
  );
};

export default SearchBar;
