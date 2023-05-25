import styled from "styled-components";

export const StyledDiv = styled.div`
    position: absolute;
    bottom: 0;
    display: flex;
    width: 100%;
    z-index: -1;

    .category {
        padding: 8px 30px;
        border-radius: 20px;
        font-size: 12px;
        border: 1px solid #fff;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        gap: 8px;
        height: max-content;

        img {
            height: 16px;
            object-fit: contain;
        }
    }


    @media (max-width: 425px){
        .category {
            font-size: 10px;

            p {
                width: max-content;
            }

            img {
                display: none;
            }
        }
    }
`;
