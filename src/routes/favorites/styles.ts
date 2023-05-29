import styled from "styled-components";

export const StyledSection = styled.section`
    .title {
        margin-top: 120px;
        font-size: var(--highlight);
        text-align: center;
    }

    .buttons_container {
        display: flex;
        justify-content: center;
        gap: 8px;
        margin-top: calc(var(--pixel) * 36);

        button {
            font-size: calc(var(--pixel) * 16);
            font-weight: bold;
            background-color: var(--black2);
            color: var(--gray1);
            padding: calc(var(--pixel) * 14) calc(var(--pixel) * 28);
            border-radius: calc(var(--pixel) * 10);

            &.active {
                color: var(--black1);
                background-color: #fff;
            }
        }
    }

    @media(max-width: 1024px){
        margin-top: 190px;

        .title {
            font-size: 3vw;
        }

        .buttons_container{
            button {
                font-size: 1.2vw;
                padding: 1.4vw 2.8vw;
                border-radius: 8px;
            }
        }
    }

    @media(max-width: 768px){

        .title {
            font-size: 4.5vw;
            /* font-size: max(60px, 4.5vw); */
            margin-bottom: 20px;
        }

        .buttons_container{
            button {
                font-size: 1.6vw;
                padding: 1.6vw 3.2vw;
            }
        }
    }

    @media(max-width: 768px){
        .title {
            font-size: 5.5vw;
        }

        .buttons_container{
            button {
                font-size: 12px;
                padding: 12px 24px;
            }
        }
    }

    @media(max-width: 425px){
        margin-top: 140px;

        .title {
            font-size: 5vw;
        }

        .buttons_container{
            button {
                font-size: 10px;
                padding: 10px 20px;
            }
        }
    }
`;
