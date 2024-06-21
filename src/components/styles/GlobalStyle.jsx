import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  
  // Reset
  body, p, ul {
    margin: unset;
    padding: unset;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: unset;
    font-size: unset;
    font-weight: unset;
  }

  li {
    list-style-type: none;
  }

  a {
    text-decoration: none;
    color: unset;
    outline: none;
  }

  button {
    all: unset;
    cursor: pointer;
  }

  img {
    max-width: 100%;
    vertical-align: top;
  }

  textarea {
    all: unset;
  }

  hr {
    all: unset;
  }
  
  // Typography

  :root {
    
  }


  // Layout
  #root {
    height: 100vh;
  }


`;

export default GlobalStyle;
