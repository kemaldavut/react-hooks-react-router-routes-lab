import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to="/" className="navbar-item">
        Home
      </NavLink>
      <NavLink to="/movies" className="navbar-item">
        Movies
      </NavLink>
      <NavLink to="/directors" className="navbar-item">
        Directors
      </NavLink>
      <NavLink to="/actors" className="navbar-item">
        Actors
      </NavLink>
    </div>
  );
};

export default NavBar;