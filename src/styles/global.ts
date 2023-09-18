import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box
    }

    body {
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
        background-color: #312d2d ;
    }

    html {
        scroll-behavior: smooth;
        -webkit-font-smoothing: antialiased
    }

    a {
        text-decoration: none;
        color: inherit;
        
        &:hover {
            svg {
                color: #bcbcbc;
            }
            color: #1b1b1b;
        }
    }
`