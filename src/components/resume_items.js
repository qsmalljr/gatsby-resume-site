import PropTypes from "prop-types";
import React from "react";
import ResumeItem from "./resume_item";
import "./resume_items.css";
import CenterWrapper from "./center_wrapper";

const ResumeItems = ({edges}) => {
    const resumeItems = edges.map((edge) => 
    <>
        <ResumeItem node={edge.node} />
        <hr />
        </>
    );
    return (
        <div className="resume-items" >
            {resumeItems}
        </div>
        );
};

ResumeItems.propTypes = {
    edges: PropTypes.array.isRequired,
};

export default ResumeItems;