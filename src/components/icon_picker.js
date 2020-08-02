import PropTypes from "prop-types";
import React from "react";
import wayfairIcon from "../images/wayfair-icon.png";
import optumIcon from "../images/optum-icon.jpg";
import "./icon_picker.css";

const IconPicker = ({company}) => {
    const coreIconPicker = (company) => {
        switch (company) {
            case 'Wayfair':
                return (<img src={wayfairIcon} />);
            case 'Optum':
                return (<img src={optumIcon} />);
            default:
                return (<div />);
        }
    }
    return (
        <div class="icon-picker">
            {coreIconPicker(company)}
        </div>
        );
};

IconPicker.propTypes = {
    company: PropTypes.string,
};

IconPicker.defaultProps = {
    company: '',
};

export default IconPicker;