import React from "react";
import MultiStepForm from "./forms/MultiStepForm";

export default function Sidebar() {
  const { stepIndex, back, next, goTo} = MultiStepForm();

  return (
    <div className="sidebar">
      <ol>
        <li onClick={goTo}>
          <div className="step">
            <span className="step-number">STEP 1</span>
            <span className="step-description">YOUR INFO</span>
          </div>        
        </li>
        <li onClick={goTo}>
          <div className="step">
            <span className="step-number">STEP 2</span>
            <span className="step-description">SELECT PLAN</span>
          </div>
        </li>
        <li onClick={goTo}>
          <div className="step">
            <span className="step-number">STEP 3</span>
            <span className="step-description">ADD-ONS</span>
          </div>
        </li>
        <li onClick={goTo}>
          <div className="step">
            <span className="step-number">STEP 4</span>
            <span className="step-description">SUMMARY</span>
          </div>
        </li>
      </ol>
    </div>
  )
}