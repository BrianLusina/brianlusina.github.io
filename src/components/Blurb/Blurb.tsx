import { GET_BLURBS_QUERY } from '@graphQl/queries';
import { FunctionComponent } from 'react';
import { useQuery } from '@apollo/client';
import { captureException, captureScope, Levels } from '@monitoring';
import BlurbItem from './BlurbItem';

const Blurb: FunctionComponent = () => {
  const { loading, error, data } = useQuery<BlurbCollection>(GET_BLURBS_QUERY);
  
  if (loading) return <div>Loading...</div>

  if (error) {
    captureException(
      error,
      captureScope({ type: 'component', data: { component: 'Blurb' } }, Levels.Error),
    );
    return <p>Yikes! Something terrible has happened. Looking into this :)</p>;
  }
  
  const blurbs = data ? data.blurbCollection.items : [];

  return {blurbs.map(({ title, image: { url }, description }) => (
    <BlurbItem key={title} title={title} image={url} description={description} />
  ))}
};

export default Blurb;
