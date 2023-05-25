import styled from "styled-components";

export const StyledSection = styled.section`
    width: 100%;
    position: relative;

    /* border: 1px solid red; */

    /* para compensar o position fixed do header */
    padding-top: 70px;

    @media (max-width: 700px){
        padding-top: 220px;
    }

`;
