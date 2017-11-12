import React from 'react';
import PropTypes from 'prop-types';

/**
 * Contact stateless component
 */
const Contact = ({}) => {
  return (
    <section>
      <header className="major">
        <h2>Get in touch</h2>
      </header>
      <p>
        Sed varius enim lorem ullamcorper dolore aliquam aenean ornare velit lacus, ac varius enim lorem ullamcorper
        dolore. Proin sed aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.
      </p>
      <ul className="contact">
        <li className="fa-envelope-o">
          <a href="#">information@untitled.tld</a>
        </li>
        <li className="fa-phone">(000) 000-0000</li>
        <li className="fa-home">Nairobi, Kenya<br/>
        </li>
      </ul>
    </section>

  );
};

/**
 * Prop validation
 */
Contact.propTypes = {
  // myProps: PropTypes.string.isRequired
};

export default Contact;
