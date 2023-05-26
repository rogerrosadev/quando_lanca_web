import styled from "styled-components";

export const StyledSection = styled.section`
    margin: 0 60px;
    margin-top: 120px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .container_header {
        margin-bottom: 40px;
        display: flex;
        justify-content: space-between;

        .texts {
            h1 {
                font-size: var(--highlight);
                line-height: var(--highlight);
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

        .mobile_filter_buttton {
            display: none;
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

        .container_header {
            margin-bottom: 20px;

            .texts {
                h1 {
                    font-size: calc(var(--highlight) * 1.2);
                    line-height: calc(var(--highlight) * 1.2);
                }

                label {
                }
            }
        }

        .controls {
            .order_by {
                gap: 60px;
                font-size: 12px;
            }

            .filter {
                font-size: 12px;
                padding: 14px 24px;

                img {
                    height: 16px;
                }
            }
        }

        .container_body {
            grid-template-columns: repeat(5, 1fr);
        }
    }

    @media (max-width: 768px){
        margin-left: 20px;
        margin-right: 20px;

        .container_header {
            .texts {
                h1 {
                    font-size: 28px;
                    line-height: 28px;
                }

                label {
                }
            }
        }

        .container_body {
            grid-template-columns: repeat(4, 1fr);
        }

        .controls {
            .order_by, .filter {
                display: none;
            }

            .mobile_filter_buttton {
                display: block;
                background-color: transparent;
                padding: 0 18px;

                img {
                    height: 16px;
                }
            }
        }

        .ver_mais {
            font-size: calc(14px * 0.98);
            padding: calc(12px * 0.9) calc(44px * 0.9);
            border-radius: 12px;
        }
    }

    @media (max-width: 650px){
        .container_body {
            grid-template-columns: repeat(3, 1fr);
            column-gap: 3vw;
        }

        .container_header {
            align-items: center;

            .texts {
                h1 {
                    font-size: 24px;
                    line-height: 24px;
                }

                label {
                }
            }
        }
    }

    @media(max-width: 425px){

        .container_header{
            .texts {
                h1 {
                    font-size: 20px;
                    margin-bottom: 8px;
                }

                label {
                    font-size: 12px;
                }
            }
        }

        .container_body {
            grid-template-columns: repeat(2, 1fr);
            row-gap: 24px;
        }

        .controls {
            .mobile_filter_buttton {
                padding: 0 4px;

                img {
                    height: 14px;
                  }
            }
        }
    }

    @media(max-width: 375px){
        .container_header{
            .texts {
                h1 {
                    font-size: 16px;
                    margin-bottom: 2px;
                }

                label {
                    font-size: 10px;
                }
            }
        }
    }
`;
