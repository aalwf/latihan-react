/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import Parent2 from "./Parent2";

function Parent1({ name }) {
  return (
    <>
      <div>Parent 1 ({name.length})</div>
      <Parent2 name={name} />
    </>
  );
}

Parent1.propTypes = {
  name: PropTypes.string,
};

export default Parent1;
