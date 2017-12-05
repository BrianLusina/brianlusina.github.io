import React from 'react';

/**
 * Header stateless component
 */
const Header = () => {
  function createLinks() {
    const socialLinks = [
      {
        name: "Twitter",
        link: "https://twitter.com/BrianLusina",
        className: "icon fa-twitter"
      },
      {
        name: "Facebook",
        link: "https://www.facebook.com/brianlusina",
        className: "icon fa-facebook"
      },
      {
        name: "Medium",
        link: "https://medium.com/@lusinabrian",
        className: "icon fa-medium"
      },
      {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/brianlusina/",
        className: "icon fa-linkedin"
      },
      {
        name: "Github",
        link: "https://github.com/BrianLusina",
        className:"icon fa-github"
      }
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
