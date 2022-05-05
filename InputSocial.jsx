import React from "react";
import Select from "react-select";
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

export const InputSocial = ({
  error,
  errorMsg,
  options,
  socialProviders,
  setSocialProviders,
}) => {
  const closeSocial = (provider) =>
    setSocialProviders(socialProviders.splice(provider, 1));

  return (
    <>
      <div className="d-flex flex-row mb-4">
        <Select
          options={options}
          styles={customStyles}
          onChange={(opt) => {
            if (socialProviders.indexOf(opt.value) == -1) {
              setSocialProviders([...socialProviders, opt.value]);
            }
          }}
        />
        <button className="btn btn-primary btn-social">Add</button>
      </div>
      <div className="d-flex flex-row">
        {socialProviders.map((provider) => {
          const icon =
            provider === 1 ? (
              <a href>
                <img src="assets/bluejestic.svg" />
              </a>
            ) : provider === 2 ? (
              <a href>
                <img src="assets/fb.svg" />
              </a>
            ) : provider === 3 ? (
              <a href>
                <img src="assets/pinterest.svg" />
              </a>
            ) : provider === 4 ? (
              <a href>
                <img src="assets/insta.svg" />
              </a>
            ) : null;

          return (
            <div className="mr-4">
              {icon}
              <i
                class="bx bx-x-circle btn-social-close"
                onClick={() => closeSocial(provider)}
              ></i>
            </div>
          );
        })}
      </div>
    </>
  );
};
