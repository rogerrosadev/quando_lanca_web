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
`;
