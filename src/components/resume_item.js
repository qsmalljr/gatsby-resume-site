import PropTypes from "prop-types";
import React from "react";

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
        <>
        <h3>{node.position}</h3>
        <p>{node.company} | {node.start} - {node.end}</p>
        <p>{node.location}</p>
        {descriptionBullets()}
        </>
        );
};

ResumeItem.propTypes = {
    node: PropTypes.object.isRequired,
};

export default ResumeItem;