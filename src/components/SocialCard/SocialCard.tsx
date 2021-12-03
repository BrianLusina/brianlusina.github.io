import { FunctionComponent } from 'react';
import { SocialCardProps } from './SocialCard.types';
import SocialCardItem from './SocialCardItem';

const SocialCard: FunctionComponent<SocialCardProps> = ({ items }) => {
  return (
    <ul className="icons">
      {items.map(({ iconName, label, link }) => (
        <li key={label}>
          <SocialCardItem iconName={iconName} link={link} label={label} />
        </li>
      ))}
    </ul>
  );
};

export default SocialCard;
