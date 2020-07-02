import PropTypes from "prop-types";
import React from "react";
import "./right_panel.css";
import { useStaticQuery, graphql } from "gatsby";
import ResumeItems from "./resume_items";

const RightPanel = () => {
    const { sheet } = useStaticQuery(
        graphql`
        query resumeQuery {
        sheet: allGoogleSheetSheet1Row {
            edges {
              node {
                company
                position
                start
                end
                location
                description
              }
            }
          }
        }
        `
      );
        
    return (
        <span className="right-panel">
            <ResumeItems edges={sheet.edges} />
        </span>
    );
};

RightPanel.propTypes = {
};

RightPanel.defaultProps = {
};

export default RightPanel;