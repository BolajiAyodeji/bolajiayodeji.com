import React from "react";

//temporary type
const Toggle = ({ checked, onChange }:any) => (
  <span className="toggle-control">
    <input
      className="dark-mode-check"
      type="checkbox"
      checked={checked}
      onChange={onChange}
      id="dark-mode-check"
      aria-label="Toggle dark mode theme"
    />
    <span></span>
  </span>
);

export default Toggle;
