import { render } from '@vitest/react';
import { expect, test } from '@vitest/vitest';
import App from '../host/src/App';

test('renders Host correctly', () => {
  const { getByText } = render(<App />);
  const headingElement = getByText('Basic Host-Remote');
  expect(headingElement).toBeDefined();
  const hostElement = getByText('Host');
  expect(hostElement).toBeDefined();
});
