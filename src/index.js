import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle `
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box
  }
`

ReactDOM.render(
  <>
    <GlobalStyles />
    <App />
  </>,
  document.getElementById('root')
);
