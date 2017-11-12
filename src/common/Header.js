import React from 'react';
import PropTypes from 'prop-types';

/**
 * Header stateless component
 */
const Header = ({}) => {
  function createLinks() {
    const socialLinks = [
      {
        name: "Twitter",
        link: "",
        className: "icon fa-twitter"
      },
      {
        name: "Facebook",
        link: "",
        className: "icon fa-facebook"
      },
      {
        name: "Medium",
        link: "",
        className: "icon fa-medium"
      },
    ];

    return socialLinks.map((item, index) => {
      return (
        <li key={index}>
          <a href={item.link} className={item.className}>
            <span className="label">{item.name}</span>
          </a>
        </li>
      )
    })
  }

  return (
    <header id="header">
      <a href="#" className="logo">
        <strong>LJournal</strong>
      </a>
      <ul className="icons">
        {createLinks()}
      </ul>
    </header>
  );
};

/**
 * Prop validation
 */
Header.propTypes = {
  // myProps: PropTypes.string.isRequired
};

export default Header;
