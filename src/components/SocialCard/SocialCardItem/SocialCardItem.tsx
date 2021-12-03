import { FunctionComponent } from 'react';
import { SocialCardItemProps } from './SocialCardItem.types';

/**
 * SocialCardItem Component to display a single social icon
 * @param {Object} param destructured prop types received by SocialIcon component
 */
const SocialCardItem: FunctionComponent<SocialCardItemProps> = ({
  className = '',
  link,
  iconName,
  label,
}) => {
  return (
    <a
      href={link}
      className={`icon fa-${iconName} ${className}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="label">{label}</span>
    </a>
  );
};

export default SocialCardItem;
