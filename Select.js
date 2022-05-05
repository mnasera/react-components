import React from "react";
import { default as ReactSelect } from "react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

import "./Custom.css";

const customStyles = {
  container: (provided, state) => {
    const styles = {
      display: "inline-block",
      width: "97%",
    };
    return { ...provided, ...styles };
  },
  control: (provided, state) => {
    const styles = {
      border: "none",
      backgroundColor: "#eceef4",
      border: state.isFocused ? 0 : 0,
      boxShadow: state.isFocused ? 0 : 0,
      "&:hover": {
        border: state.isFocused ? 0 : 0,
      },
    };
    return { ...provided, ...styles };
  },
  indicatorSeparator: (provided, state) => {
    const styles = {
      display: "none",
    };
    return { ...provided, ...styles };
  },
};

const IconTmpl = ({ name, icon, options, label, setFieldValue }) => {
  return (
    <div className="d-flex flex-row align-items-center">
      <img src={`assets/${icon}`} className="elem-image" />
      <ReactSelect
        name={name}
        options={options}
        styles={customStyles}
        defaultValue={{ label: label, value: 0 }}
        onChange={(opt) => {
          setFieldValue(name, opt.value);
        }}
      />
    </div>
  );
};

const IconLessTmpl = ({ name, label, options, setFieldValue }) => (
  <ReactSelect
    name={name}
    options={options}
    styles={customStyles}
    defaultValue={{ label: label, value: 0 }}
    onChange={(opt) => {
      setFieldValue(name, opt.value);
    }}
  />
);

export const Select = ({ error, errorMsg, ...props }) => (
  <>
    <div className={`input-container ${error ? "error-border" : ""}`}>
      <span className="text-danger">{props.required ? "*" : " "}</span>
      {props.icon ? <IconTmpl {...props} /> : <IconLessTmpl {...props} />}
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
