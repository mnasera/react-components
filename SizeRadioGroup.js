import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Custom.css";

const SizeRadioGroup = ({ size1, size2, size3, size4 }) => {
  return (
    <div className="d-flex flex-row font-size-16 mb-2 size-radio-group">
      <div className="font-size-16" style={{ width: "100px" }}>
        Size:
      </div>
      <div className="d-flex align-items-center justify-content-center position-relative mr-3">
        <input type="radio" name="size" className="position-absolute mr-3" />
        <span>{size1}</span>
      </div>
      <div className="d-flex align-items-center justify-content-center position-relative mr-3" style={{ left: "50px" }}>
        <input type="radio" name="size" className="position-absolute mr-3" />
        <span>{size2}</span>
      </div>
      <div className="d-flex align-items-center justify-content-center position-relative mr-3" style={{ left: "100px" }}>
        <input type="radio" name="size" className="position-absolute mr-3" />
        <span>{size3}</span>
      </div>
      <div className="d-flex align-items-center justify-content-center position-relative mr-3" style={{ left: "150px" }}>
        <input type="radio" name="size" className="position-absolute mr-3" />
        <span>{size4}</span>
      </div>
    </div>
  );
};

export default SizeRadioGroup;
