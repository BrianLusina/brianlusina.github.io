import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
  it('should render', () => {
    render(<Footer />);

    const copyrightText = screen.getByText(/© TheLusina. Design: /);
    expect(copyrightText).toBeInTheDocument();
  });
});
