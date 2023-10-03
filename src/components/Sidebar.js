import React from "react";
// import classNames from "classnames";
import "./Sidebar.scss";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <ol>
        <li>
          <div className="step">
            <span>STEP 1</span>
            <span className="step-description">YOUR INFO</span>
          </div>        
        </li>
        <li>
          <div className="step">
            <span>STEP 2</span>
            <span className="step-description">SELECT PLAN</span>
          </div>
        </li>
        <li>
          <div className="step">
            <span>STEP 3</span>
            <span className="step-description">ADD-ONS</span>
          </div>
        </li>
        <li>
          <div className="step">
            <span>STEP 4</span>
            <span className="step-description">SUMMARY</span>
          </div>
        </li>
      </ol>
    </div>
  )
}