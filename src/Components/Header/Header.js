import React from "react";
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import IconButton from "@material-ui/core/IconButton";
import ForumIcon from "@material-ui/icons/Forum";
import TinderLogo from "../../tinder-logo.png"

function Header() {
  return (
    <div className="Header">
      <IconButton>
        <PersonIcon fontsize="Large" className="Icon" />
      </IconButton>
      <img src={TinderLogo} className="Logo" />
      <IconButton>
        <ForumIcon fontsize="Large" className="Icon" />
      </IconButton>
    </div>
  );
}

export default Header;
