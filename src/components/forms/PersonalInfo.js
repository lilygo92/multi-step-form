import React from "react";

export default function PersonalInfo() {
  return (
    <form className="input-section">
      <label for="name">Name</label>
      <input type="text" id="name" className="name" placeholder="e.g. Stephen King"/>

      <label for="email">Email Address</label>
      <input type="email" id="email" className="email" placeholder="e.g. stephenking@lorem.com"/>

      <label for="phone">Phone Number</label>
      <input type="tel" id="phone" className="phone" placeholder="e.g. +1 234 567 890"/>
    </form>
  )
}