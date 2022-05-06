import React from "react";
import { BrowserRouter, NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <BrowserRouter>
        <NavLink to="/">Dashboard</NavLink>
        <NavLink to="schedule">Schedule</NavLink>
        <NavLink to="members">Members</NavLink>
        <NavLink to="Forms">Forms</NavLink>
        <NavLink className="flex-right" to="Logout">
          Logout
        </NavLink>
      </BrowserRouter>
    </div>
  );
};

export default Navbar;
