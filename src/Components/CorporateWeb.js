import React from "react";
import "./_corporate_web.css";
import { Link } from "react-router-dom";

const CorpWeb = () => {
  return (
    
    <div className="main-container">
      <Link to='/quations'>
      <div className="one" style={{color:"black"}}>QUOTATION</div>
      </Link>
      <Link to='/revenue'>
      <div className="two" style={{color:"black"}}>REVENUE</div>
      </Link>
      <div className="three">PRODUCT SOLD</div>
      
      <div className="four">SALES REPORT</div>
      <div className="five">RECENT MESSAGE</div>
      <div className="six">RECENT ACTIVITY</div>
      <div className="seven">SOCIAL INSIGHT</div>
      
    </div>
  );
};

export default CorpWeb;