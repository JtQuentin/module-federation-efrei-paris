import { render } from '@vitest/react';
import App from '../remote/src/app';
test('renders Remote correctly', () => {
  const { getByText } = render(<App />);
  const element = getByText('Remote');
  expect(element).toBeInTheDocument();
});