import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const contactMenu = screen.getByText(/Contact/i);
  const profileMenu = screen.getByText(/Profile/i);
  expect(contactMenu).toBeInTheDocument();
  expect(profileMenu).toBeInTheDocument();
});
