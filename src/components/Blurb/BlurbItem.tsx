import { FunctionComponent } from 'react';
import { BlurbItemProps } from './Blurb.types';

const Blurb: FunctionComponent<BlurbItemProps> = ({ title, image, description }) => (
  <article id={title.toLowerCase()}>
    <h2 className="major">{title}</h2>
    <span className="image main">
      <img src={image} alt={title} />
    </span>
    {/* eslint-disable-next-line react/no-danger */}
    <div dangerouslySetInnerHTML={{ __html: description as string }} />
  </article>
);

export default Blurb;
