import React from "react";
import "../styles/HeaderOption.css";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser } from "../src/features/userSlice";

function HeaderOption({ avatar, Icon, title, onClick }) {

  const user = useSelector(selectUser);

  return (
    <div  onClick={onClick} className="headerOption">
      {/* if I pass an Icon then only I have to render the Icon */}
      {Icon && <Icon className="headerOption-icon" />}
      {avatar && (<Avatar className="headerOption-icon" src={user?.photoUrl}>{user?.displayName[0]}</Avatar>)}
      <h3 className="headerOption-title">{title}</h3>
    </div>
  );
}

export default HeaderOption;
