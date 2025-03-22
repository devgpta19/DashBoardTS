import React, { useState } from "react";
import { MenuItem, Select } from "@mui/material";
import data from "./Data.json";
import "../Header.scss";

interface Option {
  label: string;
  value: string;
}

// Explicitly type `data.options` as `Option[]`
const options: Option[] = data.options as Option[];

const CustomDropdown: React.FC = () => {
  const [value, setValue] = useState<string>("");

  return (
    <Select
      value={value}
      onChange={(e) => setValue(e.target.value as string)}
      displayEmpty
      className="custom-dropdown"
    >
      <MenuItem value="" disabled>
        Market
      </MenuItem>
      {options.map((item, index) => (
        <MenuItem key={index} value={item.label}>
          {item.label}
        </MenuItem>
      ))}
    </Select>
  );
};

export default CustomDropdown;

