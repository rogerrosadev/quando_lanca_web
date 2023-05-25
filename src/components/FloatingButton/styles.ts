import styled from "styled-components";

export const StyledButton = styled.button`
    position: fixed;
    bottom: 24px;
    right: 24px;
    padding: var(--padding14) var(--padding24);
    z-index: 2;
    background-color: var(--main);
    display: flex;
    align-items: center;
    color: #fff;
    gap: var(--padding14);
    border-radius: calc(var(--pixel) * 10);

    img {
        height: var(--icon);
    }

    p {
        font-size: var(--sm_title);
    }

    &:hover {
        /* background-color: filter(var(--main));a */
    }

    @media (max-width: 1024px){
        padding: 10px 18px;
        gap: 10px;
        border-radius: 7px;

        img {
            height: 20px;
        }

        p {
            font-size: 12px;
        }
    }
`;
