import { FunctionComponent } from 'react';
import { SocialIconProps } from './SocialIcon.types';

/**
 * SocialIcon Component to display a single social icon
 * @param {Object} param destructured prop types received by SocialIcon component
 */
const SocialIcon: FunctionComponent<SocialIconProps> = ({
  socialIconClass,
  socialLink,
  socialName,
}) => {
  return (
    <a href={socialLink} className={socialIconClass} target="_blank" rel="noopener noreferrer">
      <span className="label">{socialName}</span>
    </a>
  );
};

export default SocialIcon;
