import styled from "styled-components";

export const StyledSection = styled.section`

    .title_section {
        padding-left: 4%;
        margin-top: 180px;

        h1 {
            font-size: var(--highlight);
            margin-bottom: 12px;

            span {
                font-weight: normal;
                color: var(--gray1);
            }
        }

        p {
            color: var(--gray1);
        }

        form {
            margin-top: 42px;
            position: relative;

            label {
                position: absolute;
                top: 4px;
                left: 12px;
                font-size: 12px;
                color: #ccc;
            }

            input[type=text]{
                max-width: 350px;
                width: 100%;
                background-color: transparent;
                padding: 14px 28px;
                border-radius: 12px;
                border: 1px solid var(--gray1);
                padding-left: 12px;
                position: relative;
                color: var(--main);

                &::placeholder {
                    color: var(--gray1);
                }
            }

            button {
                padding: 14px 28px;
                background-color: var(--main);
                color: #fff;
                font-size: 16px;
                border-radius: 12px;
                margin-left: 8px;
            }
        }
    }

`;
