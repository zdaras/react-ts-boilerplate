import { createGlobalStyle } from 'styled-components';

// normalize.css + custom styles

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
    line-height: 1.25; 
    -webkit-text-size-adjust: 100%; 
    font-family: ${props => props.theme.DEFAULT_FONT};
  }

  body {
    margin: 0;
    height: 100%;
  }

  * {
    box-sizing: border-box;
    
    ::-webkit-scrollbar-track {
      border-radius: 0;
      background-color: #f9f9f97a;
    }

    ::-webkit-scrollbar {
      width: 8px;
      background-color: #d9d9eb;
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background-color: ${props => props.theme.SCROLLBAR_COLOR};
    }
  }

  #app {
    height: 100%;
    display: flex;
    flex-direction: column;
    font-family: ${props => props.theme.DEFAULT_FONT};
    font-size: ${props => props.theme.DEFAULT_FONT_SIZE};
    line-height: ${props => props.theme.DEFAULT_LINE_HEIGHT};
    color: ${props => props.theme.DEFAULT_FONT_COLOR};
  }

  main {
    display: block;
  }

  p {
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-block-start: unset;
    margin-block-end: unset;
    margin-inline-start: unset;
    margin-inline-end: unset;
  }

  h5 {
    margin-bottom: 12px;
  }

  hr {
    box-sizing: content-box; 
    height: 0; 
    overflow: visible; 
  }

  pre {
    font-family: monospace, monospace; 
    font-size: 1em; 
  }

  a, button {
    cursor: pointer;
    background-color: transparent;
    text-decoration: unset;
    color: unset;
    outline: none;
  }

  b,
  strong {
    font-weight: bolder;
  }

  small {
    font-size: 80%;
  }

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  img {
    border-style: none;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit; 
    font-size: 100%; 
    line-height: 1.15; 
    margin: 0; 
    outline: none;
  }

  button,
  input { 
    overflow: visible;
  }

  button,
  select { 
    text-transform: none;
  }

  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }

  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  button:-moz-focusring,
  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  textarea {
    overflow: auto;
  }

  [type="checkbox"],
  [type="radio"] {
    box-sizing: border-box; 
    padding: 0; 
  }

  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance:textfield;
  }

  [type="search"] {
    -webkit-appearance: textfield; 
    outline-offset: -2px; 
  }

  [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-file-upload-button {
    -webkit-appearance: button; 
    font: inherit; 
  }

  [hidden] {
    display: none !important;
  }

  svg:not(.custom) {
    &, path {
      transition: all .2s ease-in-out;
      fill: ${props => props.theme.SVG_FILL};

      g {
        transition: all .2s ease-in-out;
        fill: ${props => props.theme.SVG_FILL};
      }
    }
  }

  path {
    transition: all .2s ease-in-out;
  }
`;
