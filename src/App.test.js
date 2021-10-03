import { render, screen } from '@testing-library/react';
import Facebook from './Facebook';

test('renders learn react link', () => {
  render(<Facebook/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
