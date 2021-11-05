import React from 'react'
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const root = document.createElement("container")
  ReactDOM.render(<App />, root);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(root.querySelector("h1").textContent).toBe('learn react');
});
