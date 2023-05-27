import styled from "styled-components";

export const StyledForm = styled.form`
    width: 100%;
    background-color: var(--black2);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 120px 20px;
    margin: 50px 0;

    h1 {
        font-size: var(--highlight);
        max-width: calc(var(--highlight) * 18.5294);
        text-align: center;
        margin-bottom: 40px;
    }

    .input_box {
        height: 60px;
        max-width: 530px;
        width: 100%;
        background-color: var(--black3);
        position: relative;
        border-radius: 12px;

        button, input[type=text] {
            height: 100%;
            background-color: transparent;
        }

        input[type=text]{
            padding-left: 16px;
            width: 100%;
            font-size: 14px;

            &::placeholder {
                color: var(--gray1);
            }
            color: var(--main);
        }

        button {
            position: absolute;
            right: 16px;
            padding-top: 6px;

            img {
                height: 24px;
            }
        }
    }

    @media (max-width: 768px){
        h1 {
            font-size: calc(var(--highlight) *1.6);
            max-width: calc(var(--highlight) * 30);
        }
    }

    @media (max-width: 650px){
        padding: 100px 20px;
    }

    @media (max-width: 425px){
        padding: 60px 20px;

        h1 {
            font-size: calc(var(--highlight) *2);
            max-width: 500px;
        }

        .input_box {
            height: 48px;
            border-radius: 10px;

            input[type=text]{
                padding-left: 16px;
                width: 100%;
                font-size: 12px;
            }

            button {
                img {
                    height: 18px;
                }
            }
        }
    }

    @media (max-width: 375px){
        h1 {
            font-size: calc(var(--highlight) *2.2);
            max-width: 500px;
        }
    }

    @media (max-width: 320px){
        h1 {
            font-size: calc(var(--highlight) *2.25);
            max-width: 500px;
        }
    }
`;
