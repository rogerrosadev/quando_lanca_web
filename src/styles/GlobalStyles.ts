import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        --green: #6DCD9F;
        --black1: #080A0C;
        --black2: #111318;
        --black3: #191D24;
        --gray1: #637592;

        --purple: #6949FF;
        --main: #6949FF;

        /* 1 pixel */
        --pixel: 0.07vw;

        /* text */
        --subtitle: 0.97vw;
        --sm_title: 1.10vw;
        --title: 1.25vw;
        --highlight: 2.50vw;
        --lg_highlight: 3.80vw;

        /* icons */
        --icon: 1.8vw;

        /* margin */
        --space16: 1.10vw;
        --space40: 2.80vw;
        --space50: 3.50vw;
        --space60: 4.15vw;

        /* padding */
        --padding8: 0.55vw;
        --padding12: 0.80vw;
        --padding14: 0.97vw;
        --padding16: 1.10vw;
        --padding24: 1.65vw;
        --padding34: 2.35vw;
        --padding120: 8.30vw;
        --padding160: 11.10vw;
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
        color: #fff;
    }

    button {
        cursor: pointer;
        font-size: 1rem;
        color: #333;
    }

    //lateral scroll
    /* width */
    ::-webkit-scrollbar {
        width: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: var(--black1);
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: var(--black3);
        border-radius: 10px;
    }

    /* Handle on hover */
    /* ::-webkit-scrollbar-thumb:hover {
        background: #333;
    } */

    //medias querys dos textos
    @media (max-width: 1100px){
        :root {
            /* --highlight: 4vw; */
        }
    }
`;
