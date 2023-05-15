import styled from "styled-components";

export const StyledVideo = styled.video`
    width: 100%;
    max-width: 1440px;
    aspect-ratio: 21/9;
    pointer-events: none;
    object-fit: cover;
    position: absolute;
    top: 0;
    z-index: -1;

    //----------- responsivo -----------//
    @media (max-width: 1024px){
        aspect-ratio: 16/9;
    }

    /* @media (max-width: 768px){
        aspect-ratio: 16/9;
    } */

    @media (max-width: 650px){
        display: none;
    }
`;
