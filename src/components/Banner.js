import React from 'react';
import PropTypes from 'prop-types';

/**
 * Banner stateless component
 */
const Banner = ({ }) => {
  return (
    <section id="banner">
      <div className="content">
        <header>
          <h1>Hi, I’m Editorial<br/>
            by HTML5 UP</h1>
          <p>A free and fully responsive site template</p>
        </header>
        <p>Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum congue.
          Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris. Ut magna finibus nisi
          nec lacinia. Nam maximus erat id euismod egestas. Pellentesque sapien ac quam. Lorem ipsum dolor sit
          nullam.</p>
        <ul className="actions">
          <li><a href="#" className="button big">Learn More</a></li>
        </ul>
      </div>
      <span className="image object">
        <img src="images/pic10.jpg" alt=""/>
      </span>
    </section>
  );
};

/**
 * Prop validation
 */
Banner.propTypes = {
  // myProps: PropTypes.string.isRequired
};

export default Banner;
