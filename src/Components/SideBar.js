import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="sidebar-container">
      <Link to='/dashboard'>
      <button className="sidebar-items">Dashboard</button>
      </Link>
      <Link to='/university'>
      <button className="sidebar-items">University</button>
      </Link>
      <button className="sidebar-items">System</button>
    </div>
  );
};

export default SideBar;