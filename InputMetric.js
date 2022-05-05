import React, { useState } from "react";
import { Input } from "reactstrap";

import "./Custom.css";

const InputMetric = ({ name, className, labelStart, labelEnd, required, error, errorMsg }) => {
  return (
    <div
      className={`d-flex flex-row align-items-center justify-content-between input-metric ${className}`}
    >
      {labelStart ? (
        <span className="p-2 input-metric-key">{labelStart}</span>
      ) : null}
      <Input name={name} type="text" className="border-0" required error errorMsg />
      {labelEnd ? (
        <span className="p-2 input-metric-key">{labelEnd}</span>
      ) : null}
    </div>
  );
};

export default InputMetric;
