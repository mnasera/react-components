import React from "react";
import { Field } from "formik";

import "./Custom.css";

export const Input = ({
  name,
  label,
  icon,
  required,
  error,
  errorMsg,
  labelStart,
  labelEnd,
}) => {
  return (
    <>
      <div className={`input-container ${error ? "error-border" : ""}`}>
        <span className="text-danger">{required ? "*" : " "}</span>
        {icon ? <img src={`assets/${icon}`} className="elem-image" /> : null}
        {labelStart ? (
          <span className="p-2 input-metric-key">{labelStart}</span>
        ) : null}
        <Field
          type="text"
          name={name}
          placeholder={label}
          className="form-control"
        />
        {labelEnd ? (
          <span className="p-2 input-metric-key">{labelEnd}</span>
        ) : null}
      </div>
      <div className="error-msg text-danger">
        {error ? (
          <div>
            <i className="bx bx-error-circle"></i>
            {errorMsg}
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Input;
