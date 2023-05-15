import styled from "styled-components";

export const StyledDiv = styled.div`
    margin: 0 auto;
    margin-top: 24px;
    padding: 0 10px;
    display: none;

    img {
        width: 100%;
    }

    @media (max-width: 650px){
        display: block;
    }
`;
