import React from "react";
import { Link } from "react-router-dom";
import "../Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">View List</Link>
        </li>
        <li>
          <Link to="/add">Add List</Link>
        </li>

        <li>
          <Link to="/getbyid">Get by ID</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
