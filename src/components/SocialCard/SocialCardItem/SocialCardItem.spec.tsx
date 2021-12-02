import { render, screen } from '@testing-library/react';
import faker from 'faker';
import SocialCardItem from './SocialCardItem';

describe('SocialCardItem', () => {
  it('should render', () => {
    const link = faker.internet.url();
    const iconName = faker.lorem.word();
    const label = faker.lorem.word();

    render(<SocialCardItem link={link} iconName={iconName} label={label} />);

    const linkElement = screen.getByRole('link');
    const labelElement = screen.getByText(label);

    expect(linkElement).toHaveAttribute('href', link);
    expect(labelElement).toBeInTheDocument();
  });
});
