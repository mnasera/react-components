import React from "react";

import "./Custom.css";

export const Button = ({ children, type, complete, onClick, className, color }) => (
  <button
    className={`
        btn 
        ${color === "secondary" ? "btn-secondary" : ""} 
        ${color === "outline" ? "btn-outline-secondary" : ""} 
        ${type === "submit" || type === "button" || color === "primary" ? "btn-action" : ""}
        ${className ? className : ""}
    `}
    type={type || "button"}
    onClick={onClick}
  >
    {children}
    {complete ? <i className="bx bx-check"></i> : null}
  </button>
);
