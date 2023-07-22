import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  
   * {

     margin: 0;
     padding: 0;
     font-family: 'Roboto', 'sans-serif';
     -webkit-font-smoothing: antialiased;
   }

   body {
    background-color: #E5E5E5;
    image-rendering: optimizeSpeed

   }

   h1, h2, h3, h4, h5, h6  {
    font-family: 'Montserrat Alternates';
   }
`;

export default GlobalStyle;
