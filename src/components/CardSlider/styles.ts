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
`;
