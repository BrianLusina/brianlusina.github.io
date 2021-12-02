import { render, screen } from '@testing-library/react';
import faker from 'faker';
import SocialCard from './SocialCard';

describe('SocialCard', () => {
  it('should render', () => {
    const link = faker.internet.url();
    const iconName = faker.lorem.word();
    const label = faker.lorem.word();

    const items = [
      {
        link,
        iconName,
        label,
      },
    ];

    render(<SocialCard items={items} />);

    const linkElement = screen.getByRole('link');
    const labelElement = screen.getByText(label);

    expect(linkElement).toHaveAttribute('href', link);
    expect(labelElement).toBeInTheDocument();
  });
});
