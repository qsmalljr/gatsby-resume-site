
import React from "react";
import PropTypes from "prop-types";
import "./center_wrapper.css";

const CenterWrapper = ({ children }) => {
    return (
        <div className="center-wrap">
          {children}
        </div>
      )
};

CenterWrapper.propTypes = {
    children: PropTypes.node.isRequired,
};

export default  CenterWrapper;