import React from "react";
import MultiStepForm from "./MultiStepForm";

export default function Button() {
  const { stepIndex, back, next, goTo} = MultiStepForm();

  return(
    <div onClick={next} className="next-button">Next Step</div>
  )
}