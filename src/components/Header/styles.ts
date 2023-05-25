import styled from "styled-components";

import { HeaderProps } from "./interface";

export const StyledHeader = styled.header<HeaderProps>`
    min-height: 68px;
    width: 100%;
    background-color: var(--black2);
    border-bottom: 2px solid var(--black3);
    position: fixed;
    top: 0;
    z-index: 3;

    section {
        min-height: 78px;
        display: flex;
        flex-direction: row;
        padding: 0 80px;
        align-items: center;
        justify-content: space-between;

        .top {
            display: flex;
            align-items: center;
            /* justify-content: center; */
            gap: 20px;
            width: 100%;

            .return_arrow, .marker {
                display: none;
            }


        }

        label {
            font-size: 20px;
            color: #fff;
            font-weight: bold;
            margin-bottom: 20px;
            max-width: 500px;
            width: 100%;
            display: none;
        }

        .search_form {
            max-width: 500px;
            width: 100%;
            position: relative;

            input[type=text]{
                width: 100%;
                height: 40px;
                padding: 0 16px;
                background-color: var(--black3);
                border-radius: 12px;
                font-size: 14px;
                color: var(--gray1);

                &::placeholder {
                    color: var(--gray1);
                }
            }

            button {
                background-color: transparent;
                position: absolute;
                transform: translateY(-50%);
                right: 16px;
                top: 55%;

                img {
                    height: 16px;
                }
            }
        }
    }


    /* ------------- responsivo -------------  */
    @media(max-width: 1024px){
        section {
            padding: 24px 40px;
            flex-direction: column;
            justify-content: center;

            .top {
                width: 100%;
                margin-bottom: 28px;
                justify-content: center;

                ${props => props.variant === 'marker_only' && `
                    width: 100%;
                    justify-content: space-between;

                    .marker {
                        display: block;
                    }

                    .return_arrow {
                        display: block;
                    }
                `}
                ${props => props.variant === 'marker&return' && `
                    justify-content: space-between;

                    .return_arrow, .marker {
                        display: block;
                    }
                `}
            }
        }
    }

    @media (max-width: 720px){
        section {
            padding-left: 20px;
            padding-right: 20px;

            .search_form {
                input[type=text]{
                    font-size: 12px;
                }
            }
        }
    }

    @media(max-width: 425px){
        border: none;
        background-color: var(--black1);

        section {

            label {
                display: block;
            }
        }
    }

`;
