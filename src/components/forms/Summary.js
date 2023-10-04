import React from "react";

export default function Summary() {
  return (
    <>
      <div className="form--summary">

        <div className="summary">
          <div className="summary--plan">
            <div className="summary--plan_description">
              <span className="summary--plan_description--type">Arcade (Monthly)</span>
              <span className="summary--plan_description--change">Change</span>
            </div>
            <span className="summary--plan_price">$9/mo</span>
          </div>
          <div className="summary--add-ons">
            <div className="summary--add-ons_item">
              <span className="summary--add-ons_item--type">Online service</span>
              <span className="summary--add-ons_item--price">+$1/mo</span>
            </div>
            <div className="summary--add-ons_item">
              <span className="summary--add-ons_item--type">Larger storage</span>
              <span className="summary--add-ons_item--price">+$2/mo</span>
            </div>
          </div>

        </div>
        <div className="summary--total">
          <span className="summary--total_text">Total (per month)</span>
          <span className="summary--total_price">+$12/mo</span>
        </div>
      </div>
    </>
  )
}