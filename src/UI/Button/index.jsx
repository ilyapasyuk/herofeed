import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Button = ({
    title,
    className,
    icon,
    callBackClick,
}) => {
    const iconButton = icon ? <i className={icon} /> : '';

    return (
        <button
            className={className}
            onClick={callBackClick}
        >
            {iconButton}
            {title}
        </button>
    );
};

Button.propTypes = {
    title: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    icon: PropTypes.string,
    callBackClick: PropTypes.func.isRequired,
};

export default Button;
