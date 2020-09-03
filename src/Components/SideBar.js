import React from "react";
import "./style.css";

const SideBar = () => {
  return (
    <div className="sidebar-container">
      
      <button className="sidebar-items">Dashboard</button>
      <button className="sidebar-items">University</button>
      <button className="sidebar-items">System</button>
    </div>
  );
};

export default SideBar;