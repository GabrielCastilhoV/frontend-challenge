import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
    outline: 0;
    text-decoration: none;
    list-style: none;
  }
  
  body {
    background: ${({ theme }) => theme.background}
  }

  p, h1, h2, h3 {
    color: ${({ theme }) => theme.text}
  }

  p {
    font-size: 1.25rem;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 500;
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 400;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  ul, li {
    list-style: none;
  }

  button {
    cursor: pointer;
    border: none;
    background: transparent;
  }
  
  input {
    border: none;
  }

  body, input, textarea, select, button {
    font: 400 1rem "Arial", sans-serif;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }
  
  @media (max-width: 720px) {
    html {
      font-size: 87.5%large;
    }
  }
`;
