import React from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const Header = ({ handleToggleDarkMode }) => {
  return (
    <div className="header">
      <h1>Notes</h1>
      <button
        onClick={() =>
          handleToggleDarkMode((previousDarkMode) => !previousDarkMode)
        }
        className="save"
      >
        <DarkModeIcon />
      </button>
    </div>
  );
};

export default Header;
