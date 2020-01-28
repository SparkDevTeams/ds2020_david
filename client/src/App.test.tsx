import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import axios from "axios" ;
import { act } from 'react-dom/test-utils';

jest.mock("axios") ;

test('renders learn react link', () => {
  // const { getByText } = render(<App />);
  render(<App />) ;
  // const linkElement = getByText(/learn react/i);
  const linkElement = document.getElementById("app-root") ;
  expect(linkElement).toBeInTheDocument();
});
