import styled from "styled-components";

export const StyledArticle = styled.article`
    width: 30vw;
    aspect-ratio: 6/9;
    cursor: pointer;

    .thumbnail {
        position: relative;

        img {
            width: 100%;
        }

        .play {
            width: 3vw;
            position: absolute;
            z-index: 1;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
            pointer-events: none;
        }
    }

    p {
        font-size: var(--title);
    }

    @media(max-width: 1024px){
        p {
            font-size: calc(var(--title) * 1.3);
        }
    }

    @media(max-width: 768px){
        p {
            font-size: calc(var(--title) * 1.5);
        }
    }

    @media(max-width: 650px){
        width: 50vw;

        .thumbnail {
            .play {
                width: calc(3vw * 1.66);
            }
        }

        p {
            font-size: 12px;
        }
    }

    @media(max-width: 425px){
        width: 65vw;
    }

    @media(max-width: 320px){
        width: 70vw;
    }
`;
