import styled from "styled-components";

export const StyledDiv = styled.div`
    margin: 0 4%;

    /* --------------- */
    margin-top: 100px;
    /* --------------- */


    .slider_header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 40px;
        padding-right: 10px;

        .controllers {
            img {
                cursor: pointer;
                margin-top: 10px;
                width: var(--icon);

                &:nth-child(1){
                    margin-right: 20px;
                }
            }
        }

        h1 {
            /* font-size: 28px; */
            font-size: var(--highlight);
        }
    }

    .viewport {
        /* max-width: 100%; */
        overflow-x: hidden;

        .rail {
            display: flex;
            gap: 1.3vw;
            width: max-content;

            img {
                pointer-events: none;
            }
        }
    }

    @media(max-width: 1024px){
        .slider_header {
            h1 {
                font-size: calc(var(--highlight) * 1.2);
                line-height: calc(var(--highlight) * 1.2);
            }

            .controllers {
                img {
                    width: 24px;
                }
            }
        }

        .viewport {
            .rail {
                gap: 2.2vw;
            }
        }
    }

    @media(max-width: 768px){
        .slider_header {
            h1 {
                font-size: 28px;
                line-height: 28px;
            }

            .controllers {
                img {
                    width: 20px;
                    margin-top: 0;

                    &:nth-child(1){
                        margin-right: 10px;
                    }
                }
            }
        }

        .viewport {
            .rail {
                gap: 1.5vw;
            }
        }
    }

    @media(max-width: 650px){
        .slider_header {
            h1 {
                font-size: 24px;
                line-height: 24px;
            }

            .controllers {
                img {
                    width: 16px;

                    &:nth-child(1){
                        margin-right: 8px;
                    }
                }
            }
        }

        .viewport {
            .rail {
                gap: 2.2vw;
            }
        }
    }

    @media(max-width: 425px){
        .viewport {
            .rail {
                gap: 2.9vw;
            }
        }
    }

    @media(max-width: 375px){
        .slider_header {
            h1 {
                font-size: 16px;
            }
        }
    }
`;
