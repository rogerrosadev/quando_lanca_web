import styled from "styled-components";

export const StyledNav = styled.nav`
    position: fixed;
    display: none;
    width: 100%;
    bottom: 0;
    height: 68px;
    background-color: var(--black1);
    z-index: 2;
    border-top: 2px solid var(--black3);

    a {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;

        &:nth-child(2){
            .icon {
                font-size: 22px;
            }
        }

        .icon {
            font-size: 18px;
            fill: #9C9C9C;
        }
    }


    @media (max-width: 425px){
        display: flex;
    }
`;
