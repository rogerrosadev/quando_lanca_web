import styled from "styled-components";

export const StyledSection = styled.section`
    margin: 0 60px;
    margin-top: 120px;

    .container_header {
        margin-bottom: 40px;
        display: flex;
        justify-content: space-between;

        .texts {
            h1 {
                font-size: var(--highlight);
                font-weight: bold;
                margin-bottom: 16px;
            }

            label {
                font-size: 14px;
                color: var(--gray1);
            }
        }
    }


    .container_body {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        gap: 1.8vw;
        justify-content: space-between;
        row-gap: 4vw;
    }

    /* ------------ buttons ------------ */
    .controls {
        display: flex;
        gap: 24px;


        .order_by {
            padding: 10px 12px;
            background-color: var(--black3);
            color: #fff;
            border-radius: 12px;
            display: flex;
            align-items: center;
            gap: 110px;
            font-size: 14px;
            height: max-content;
        }

        .filter {
            font-size: 14px;
            background-color: var(--black3);
            display: flex;
            align-items: center;
            padding: 12px 24px;
            border-radius: 12px;
            gap: 8px;
            color: var(--main);
            font-weight: bold;
            height: max-content;
        }
    }


    .ver_mais {
        font-size: 14px;
        padding: 12px 44px;
        background-color: transparent;
        border: 2px solid var(--main);
        color: var(--main);
        border-radius: 12px;
        margin-left: 50%;
        transform: translateX(-50%);
        margin-top: 60px;
    }

    @media (max-width: 1024px){
        margin: 0 40px;
        margin-top: 120px;

        .container_body {
            grid-template-columns: repeat(5, 1fr);
        }
    }

    @media (max-width: 768px){
        margin: 0 20px;

        .container_body {
            grid-template-columns: repeat(4, 1fr);
        }

        .ver_mais {
            font-size: calc(14px * 0.98);
            padding: calc(12px * 0.9) calc(44px * 0.9);
            border-radius: 12px;
        }
    }
`;
