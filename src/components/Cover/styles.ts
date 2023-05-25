import styled from "styled-components";

export const StyledSection = styled.section`
    max-height: 800px;
    height: 100%;
    position: relative;

    img {
        object-fit: cover;
        width: 100%;
        height: calc(100vh - 88px);
        max-height: 800px;
        position: relative;
        opacity: 0.5;
        z-index: -1;
    }

    h1 {
        font-size: var(--lg_highlight);

        //equvale a x% o tamanho do texto
        max-width: calc(var(--lg_highlight) * 9.2143);
        text-transform: uppercase;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        margin-left: 5%;
        z-index: -1;
    }

    /* @media (max-width: 1024px){
        h1 {
            font-size: 48px;
            max-width: 442px;
        }
    }

    @media (max-width: 768px){
        h1 {
            font-size: 36px;
            max-width: 332px;
        }
    } */

    @media (max-width: 700px){
        h1, img {
            display: none;
        }
    }
`;
