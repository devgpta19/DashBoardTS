import React from "react";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import "../Header.scss";


const NotificationBadge: React.FC = () => {
  return (
    <div className="notification-container">
      <DashboardCustomizeIcon className="notification-icon" />
    </div>
  );
};

export default NotificationBadge;
