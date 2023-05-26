import styled from "styled-components";

export const StyledArticle = styled.article`
    max-width: 14vw;

    .header {
        width: 100%;
        aspect-ratio: 3/4;
        margin-bottom: 8px;

        img {
            width: 100%;
        }
    }

    .body {
        width: 100%;

        p {
            font-size: var(--subtitle);
            color: var(--gray1);
        }

        h3 {
            font-size: var(--title);
            margin: 8px 0;
        }
    }


    @media(max-width: 1024px){
        max-width: 16.6vw;

        .body {
            p {
                font-size: calc(var(--subtitle) * 1.2);
            }

            h3 {
                font-size: calc(var(--title) * 1.2);
            }
        }
    }

    @media (max-width: 768px){
        max-width: 21.8vw;

        .body {
            p {
                font-size: calc(var(--subtitle) * 1.5);
            }

            h3 {
                font-size: calc(var(--title) * 1.5);
            }
        }
    }

    @media (max-width: 650px){
        max-width: 29vw;

        .body {
            p {
                font-size: calc(var(--subtitle) * 2.1);
            }

            h3 {
                font-size: calc(var(--title) * 2.1);
            }
        }
    }

    @media(max-width: 425px){
        max-width: 44vw;

        .body {
            p {
                font-size: calc(var(--subtitle) * 3);
            }

            h3 {
                font-size: calc(var(--title) * 3);
            }
        }
    }
`;
