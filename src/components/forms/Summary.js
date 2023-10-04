import React from "react";

export default function Summary() {
  return (
    <>
      <div className="form--summary">
        <div className="summary">
          <div className="summary--plan">
            <span className="summary--plan_type">
              Arcade (Monthly)
            </span>
            <span className="summary--plan_change">
              Change
            </span>
          </div>
          <span className="summary--plan_price">
            $9/mo
          </span>
        </div>
        <div className="summary">
          <div className="summary--add-on">
            <span className="summary--add-on_type">
              Online service
            </span>
            <span className="summary--add-on_price">
              +$1/mo
            </span>
          </div>
          <div className="summary--add-on">
            <span className="summary--add-on_type">
              Larger storage
            </span>
            <span className="summary--add-on_price">
              +$2/mo
            </span>
          </div>
        </div>
        <div className="summary--total">
          <span className="summary--total_text">
            Total (per month)
          </span>
          <span className="summary--total_price">
            +$12/mo
          </span>
        </div>
      </div>
    </>
  )
}