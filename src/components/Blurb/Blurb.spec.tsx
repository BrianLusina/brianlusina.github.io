import { render } from '@testing-library/react';
import faker from 'faker';
import Blurb from './Blurb';

describe('Blurb', () => {
  const props = {
    title: faker.lorem.sentence(),
    image: faker.image.imageUrl(),
    description: faker.lorem.paragraph(),
  };

  it('should render', () => {
    render(<Blurb {...props} />);
  });
});
