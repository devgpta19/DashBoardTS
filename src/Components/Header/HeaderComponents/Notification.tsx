import React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import "../Header.scss";

interface NotificationBadgeProps {
  count: number;
}

const NotificationBadge: React.FC<NotificationBadgeProps> = ({ count }) => {
  return (
    <div className="notification-container">
      <NotificationsIcon sx={{ width: 18, height: 18 }} className="notification-icon" />
      {count > 0 && <span className="badge">{count}</span>}
    </div>
  );
};

export default NotificationBadge;
