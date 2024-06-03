/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";

function Parent2({ name }) {
  return (
    <>
      <div>Parent 2</div>
      <h1>{name}</h1>
    </>
  );
}

Parent2.propTypes = {
  name: PropTypes.string,
};

export default Parent2;
