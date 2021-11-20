import { FunctionComponent } from 'react';
import { BlurbProps } from './Blurb.types';

const Blurb: FunctionComponent<BlurbProps> = ({ title, image, description }) => (
  <article id={title.toLowerCase()}>
    <h2 className="major">{title}</h2>
    <span className="image main">
      <img src={image || '@images/pic01.jpg'} alt="" />
    </span>
    {description}
  </article>
);

export default Blurb;
