import React, { useState, MouseEvent } from "react";
import { Menu, MenuItem, Avatar, IconButton } from "@mui/material";
import data from "./Data.json";
import "../Header.scss";

interface MenuItemType {
  label: string;
}

const ProfileDropdown: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const charArray = data.name.split("");
  
  return (
    <div className="profile-container">
      <IconButton onClick={handleClick} className="avatar-button">
        <Avatar className="custom-avatar">{charArray[0]}</Avatar>
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        className="profile-menu"
        MenuListProps={{ className: "menu-list" }}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        {data.menuItems.map((item: MenuItemType, index: number) => (
          <MenuItem key={index} onClick={handleClose}>
            {item.label}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default ProfileDropdown;

