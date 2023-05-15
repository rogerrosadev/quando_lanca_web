import styled from "styled-components";

export const StyledDiv = styled.div`
    position: absolute;
    top: 0;
    margin-left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    width: 100%;
    aspect-ratio: 21/9;

    //----------- configuração do grid -----------//
    figure {
        position: absolute;
        bottom: -140px;
        display: grid;
        gap: 20px;
        grid-template-columns: repeat(4, 190px);
        grid-template-rows: repeat(2, 190px);
        grid-template-areas:
            'image1 image1 image2 image3'
            'image4 image5 image5 image3'
        ;
        .img1 {
            grid-area: image1;
        }
        .img2 {
            grid-area: image2;
        }
        .img3 {
            grid-area: image3;
        }
        .img4 {
            grid-area: image4;
        }
        .img5 {
            grid-area: image5;
        }

        //----------- imagens -----------//
        .image {
            background-color: #333;
            overflow: hidden;

            img {
                object-fit: cover;
                width: 100%;
            }

            &:hover {
                img {
                    transition: 300ms ease-in-out;
                    scale: 1.1;
                }
            }
        }
    }

    //----------- responsivo -----------//
    @media(max-width: 1024px){
        aspect-ratio: 16/9;

        figure {
            grid-template-columns: repeat(4, 150px);
            grid-template-rows: repeat(2, 150px);
            gap: 10px;
            bottom: -100px;
        }
    }

    @media(max-width: 768px){
        figure{
            grid-template-columns: repeat(4, 120px);
            grid-template-rows: repeat(2, 120px);
            gap: 10px;
            bottom: -60px;
        }
    }

    @media(max-width: 650px){
        display: none;
    }
`;
