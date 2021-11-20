import { FunctionComponent } from 'react';

const SocialCard: FunctionComponent = () => {
  return (
    <ul className="icons">
      <li>
        <a href="#" className="icon fa-twitter">
          <span className="label">Twitter</span>
        </a>
      </li>
      <li>
        <a href="#" className="icon fa-instagram">
          <span className="label">Instagram</span>
        </a>
      </li>
      <li>
        <a href="#" className="icon fa-github">
          <span className="label">GitHub</span>
        </a>
      </li>
    </ul>
  );
};

export default SocialCard;
