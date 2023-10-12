import React from "react";

export default function BackButton(props) {

  return (
    <div onClick={props.onClick} className="back-button">
      Go Back
    </div>
  )
}