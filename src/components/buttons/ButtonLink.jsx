import React from "react";
import { string, object } from "prop-types";
import { Link } from 'gatsby'


const ButtonLink = ({ link, text, ...rest }) => (
    <Link
        to={link}
        className="button large"
        {...rest}
    >
        {text}
    </Link>
);

ButtonLink.propTypes = {
    link: string,
    text: string,
    rest: object
}

export default ButtonLink;