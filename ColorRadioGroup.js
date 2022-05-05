import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Custom.css";

const ColorRadioGroup = ({ color1, color2, color3, className }) => {
  return (
    <div className={`d-flex flex-row font-size-16 color-radio-group ${className}`}>
      <div className="font-size-16" style={{width: "100px"}}>Colors:</div>
      <input
        type="radio"
        name="color"
        style={{ backgroundColor: color1 }}
        className="mr-3"
      />
      <input
        type="radio"
        name="color"
        style={{ backgroundColor: color2 }}
        className="mr-3"
      />
      <input type="radio" name="color" style={{ backgroundColor: color3 }} />
    </div>
  );
};

export default ColorRadioGroup;
