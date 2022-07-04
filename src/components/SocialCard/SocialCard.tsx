import { FunctionComponent } from 'react';
import { useQuery } from '@apollo/client';
import { GET_SOCIAL_INFO_QUERY } from '@graphQl/queries';
import { captureException, captureScope, Levels } from '@monitoring';
import SocialCardItem from './SocialCardItem';

const SocialCard: FunctionComponent = () => {
  const { loading, error, data } = useQuery<SocialsData>(GET_SOCIAL_INFO_QUERY);

  if (loading) return <div>Loading...</div>;

  if (error) {
    captureException(
      error,
      captureScope({ type: 'component', data: { component: 'Blurb' } }, Levels.Error),
    );
    return <p>Yikes! Something terrible has happened. Looking into this :)</p>;
  }

  const socialItems = data ? data.socialCollection.items : [];

  return (
    <ul className="icons">
      {socialItems.map(({ name, link }) => (
        <li key={name}>
          <SocialCardItem iconName={name.toLocaleLowerCase()} link={link} label={name} />
        </li>
      ))}
    </ul>
  );
};

export default SocialCard;
