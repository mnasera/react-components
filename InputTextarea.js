import React from "react";
import { Field } from "formik";

import "./Custom.css";

export const InputTextarea = ({ name, label, icon, required, error, errorMsg, rows }) => {
  return (
    <>
      <div className={`input-container ${error ? "error-border" : ""}`}>
        <span className="text-danger">{required ? "*" : " "}</span>
        {icon ? (
          <img src={`assets/${icon}`} className="elem-image"/>
        ) : null}
        <Field
          as="textarea"
          rows={rows}
          name={name}
          className="form-control"
          placeholder={label}
        />
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

export default InputTextarea;
