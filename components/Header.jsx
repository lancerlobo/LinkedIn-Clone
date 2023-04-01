import React from "react";
import "../styles/Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./Firebase";
import { logout, selectUser } from "../src/features/userSlice";

function Header() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const logOutOfApp = () => {
    dispatch(logout())
    auth.signOut();
  };

  return (
    <div className="header">
      <div className="header-left">
        <img src="linkedin.png" alt="LinkedIn logo" />
        <div className="header-search">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>

      <div className="header-right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption avatar={true} title="Me" onClick={logOutOfApp} />
      </div>
    </div>
  );
}

export default Header;
