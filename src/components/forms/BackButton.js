import React from "react";
import MultiStepForm from "./MultiStepForm";

export default function BackButton() {
  const { stepIndex, back, next, goTo} = MultiStepForm();
  
  return (
    <div onClick={back} className="back-button">
      Go Back
    </div>
  )
}