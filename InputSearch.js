import React, { useState } from "react";
import { Input } from "reactstrap";

const InputSearch = ({ className, setSearchKey }) => {
  const onSearch = (e) => {
    const key = e && e.target && e.target.value;
    setSearchKey(key);
  };

  return (
    <div
      className={`d-inline-flex flex-row align-items-center input-search ${className}`}
    >
      <Input type="text" className="border-0" onChange={onSearch} />
      <i className="bx bx-search-alt search-icon font-size-20 ml-2 mr-2" />
    </div>
  );
};

export default InputSearch;
