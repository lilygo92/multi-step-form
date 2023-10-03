import React from "react";

export default function AddOns() {
  return (
    <>
      <div className="form--add-ons">
        <div className="add-on">
          <input type="checkbox"></input>
          <div className="add-on--text">
            <span className="add-on--text_name">Online service</span>
            <span className="add-on--text_description">Access to multiplayer games</span>
          </div>
          <div className="add-on--price">+$1/mo</div>
        </div>

        <div className="add-on">
          <input type="checkbox"></input>
          <div className="add-on--text">
            <span className="add-on--text_name">Larger storage</span>
            <span className="add-on--text_description">Extra 1TB of cloud save</span>
          </div>
          <div className="add-on--price">+$2/mo</div>
        </div>

        <div className="add-on">
          <input type="checkbox"></input>
          <div className="add-on--text">
            <span className="add-on--text_name">Customizable profile</span>
            <span className="add-on--text_description">Custom theme on your profile</span>
          </div>
          <div className="add-on--price">+$2/mo</div>
        </div>
      </div>
    </>
  )
}