import React from 'react';
import PropTypes from 'prop-types';

const CustomLabel = ({ name, color }) => 
    <span className="custom-label" style={{ backgroundColor: color }}>
        { name }
    </span >

    CustomLabel.propTypes = {
    name: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
}

export default CustomLabel;