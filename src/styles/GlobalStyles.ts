import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'DM Sans', sans-serif;
        border: none;
        outline: none;
    }

    body {
        background-color: #fafafa;
        color: #333;
    }

    button {
        cursor: pointer;
        font-size: 1rem;
        color: #333;
    }
`;
