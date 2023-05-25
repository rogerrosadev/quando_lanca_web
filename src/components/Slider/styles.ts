import styled from "styled-components";

export const StyledDiv = styled.div`
    max-width: 990px;
    padding: 0 20px;
    margin: 0 auto;
    overflow: hidden;

    .carousel {
        cursor: grab;
    }

    .inner {
        display: flex;
        gap: 10px;
    }

    /* .carousel_content {
        img {
            width: 200px;
            pointer-events: none;
        }
    } */
`;
