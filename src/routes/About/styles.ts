import styled from "styled-components";

export const StyledSection = styled.section`
    margin-top: 120px;

    .game_overview {
        display: flex;

        .game_cover, .about {
            flex: 1;
        }

        .game_cover {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 0 20px;

            img {
                width: 300px;
                height: 420px;
                object-fit: cover;
                border-radius: 10px;
            }

            .buy_game {
                margin-top: 40px;
                background-color: var(--black3);
                padding: 20px;
                width: 100%;
                border-radius: 10px;
            }
        }

        .about {
            padding: 20px;

            h1 {
                font-size: 36px;
                margin-bottom: 24px;
            }

            &>p {
                font-size: 14px;
                color: var(--gray1);
                line-height: 22px;
                /* text-align: justify; */
            }

            .infos {
                margin-top: 60px;

                ul {
                    li {
                        list-style: none;
                        display: flex;
                        justify-content: space-between;
                        margin-bottom: 34px;

                        p {
                            font-size: 14px;
                            font-weight: bold;
                            color: var(--gray1);

                            &:nth-child(2){
                                font-weight: normal;
                                color: #fff;
                            }
                        }
                    }
                }

                .counter {
                    display: flex;
                    gap: 24px;
                    margin-top: 80px;

                    .counter_box {
                        width: 100px;
                        height: 100px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        flex-direction: column;
                        border: 2px solid var(--gray1);
                        border-radius: 10px;
                    }
                }
            }
        }
    }

`;
