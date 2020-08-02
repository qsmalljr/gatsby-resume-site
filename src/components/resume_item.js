import PropTypes from "prop-types";
import React from "react";
import IconPicker from "./icon_picker";

const ResumeItem = ({node}) => {
    console.log(node);
    const descriptionBullets = () => {
        if (node.description) {
            return (
            <ul>
                {node.description.split('.').map((currentBullet) => 
                    <li>{currentBullet}</li>
                )}
            </ul>
            );
        }
    };

    return (
        <div class="item-wrap" style={{'padding-top':'10px'}}>
            <IconPicker company={node.company} class="company-icon" style={{'vertical-align': 'top'}} />
            <div class="resume-meta-data" style={{display: 'inline-block', 'max-width': '750px'}}>
                <h3>{node.position}</h3>
                <p>{node.company} | {node.start} - {node.end}</p>
                <p>{node.location}</p>
                {descriptionBullets()}
            </div>
        </div>
        );
};

ResumeItem.propTypes = {
    node: PropTypes.object.isRequired,
};

export default ResumeItem;