import PropTypes from "prop-types";
import React from "react";
import "./left_panel.css";
import profilePicture from "../images/cropped-selfie.jpg";
import downloadIcon from "../images/download-icon.png";
import CenterWrapper from "./center_wrapper";
import SocialMediaIcons from "./social_media_icons";
import { useStaticQuery, graphql } from "gatsby";

const LeftPanel = () => {
    const { sheet } = useStaticQuery(
        graphql`
        query bioQuery {
        sheet: allGoogleSheetSheet1Row {
            edges {
              node {
                bio
              }
            }
          }
        }
        `
      );

    return (
    <div className="left-panel">
        <CenterWrapper>
            <img src={profilePicture} alt="Profile Picture" className="profile-picture" />
            <p className="name" >Quentin R. Small Jr.</p>
            <hr />
            <p className="bio">{sheet?.edges?.[0]?.node?.bio || ''}</p>
            <button size="lg" className="download-button">
                <img className="download-icon" src={downloadIcon}/>
                Download Resume
            </button>
            <p/>
            <SocialMediaIcons />
        </CenterWrapper>
    </div>
    );
};

LeftPanel.propTypes = {
};

LeftPanel.defaultProps = {
};

export default LeftPanel;