import React from 'react';
import PropTypes from 'prop-types';
import FooterProps from "./propInterface";

const Footer = (props: FooterProps) => {
    
    return (
        <div>
            <p>This is the footer{props.message}</p>
            {props.children}
        </div>
    );
};

export default Footer;