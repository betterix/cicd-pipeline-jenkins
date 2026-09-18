import React, { act } from 'react';
import { createRoot } from 'react-dom/client';
import { expect, it } from 'vitest';
import App from './App';

it('renders without crashing', async () => {
  const div = document.createElement('div');
  const root = createRoot(div);

  await act(async () => {
    root.render(<App />);
  });

  expect(div.textContent).toContain('Welcome to React');

  root.unmount();
});