import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        --green: #6DCD9F;
        --black1: #080A0C;
        --black2: #111318;
        --black3: #191D24;
        --gray1: #637592;

        --purple: #6949FF;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Sora', sans-serif;
        border: none;
        outline: none;
    }

    body {
        background-color: var(--black1);
    }

    button {
        cursor: pointer;
        font-size: 1rem;
        color: #333;
    }
`;
