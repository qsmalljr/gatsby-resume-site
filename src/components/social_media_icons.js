import PropTypes from "prop-types";
import React from "react";
import "./social_media_icons.css";
import facebookIcon from "../images/facebook.png";
import githubIcon from "../images/GitHub-Logo-icon.png";
import linkedinIcon from "../images/linkedin-icon.png";
import instagramIcon from "../images/instagram-icon.png";

const SocialMediaIcons = () => (
    <div className="icon-wrap">
        <a href="https://www.facebook.com/quentin.small.5" >
            <img className="facebook-icon icon" src={facebookIcon} alt="Facebook icon" />
        </a>
        <a href="https://github.com/qsmalljr" >
            <img className="github-icon icon" src={githubIcon} alt="Github icon" />
        </a>
        <a href="https://www.linkedin.com/in/quentin-small-jr-891234139/" >
            <img className="linkedin-icon icon" src={linkedinIcon} alt="Linked-In icon" />
        </a>
        <a href="https://www.instagram.com/qsmalljr/" >
            <img className="instagram-icon icon" src={instagramIcon} alt="Instagram icon" />
        </a>
    </div>
);

SocialMediaIcons.propTypes = {
};

SocialMediaIcons.defaultProps = {
};

export default SocialMediaIcons;