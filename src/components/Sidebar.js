import React from "react";

export default function Sidebar(props) {

  return (
    <div className="sidebar">
      <ol>
        <li onClick={props.goToStepOne}>
          <div className="step">
            <span className="step-number">STEP 1</span>
            <span className="step-description">YOUR INFO</span>
          </div>        
        </li>
        <li onClick={props.goToStepTwo}>
          <div className="step">
            <span className="step-number">STEP 2</span>
            <span className="step-description">SELECT PLAN</span>
          </div>
        </li>
        <li onClick={props.goToStepThree}>
          <div className="step">
            <span className="step-number">STEP 3</span>
            <span className="step-description">ADD-ONS</span>
          </div>
        </li>
        <li onClick={props.goToStepFour}>
          <div className="step">
            <span className="step-number">STEP 4</span>
            <span className="step-description">SUMMARY</span>
          </div>
        </li>
      </ol>
    </div>
  )
}