import React from 'react';
import PropTypes from 'prop-types';

const Footer = (props) => {
    
    return (
        <div>
            <p>This is the footer{props.message}</p>
            {props.children}
        </div>
    );
};

Footer.propTypes = {
    message: PropTypes.string
}

export default Footer;