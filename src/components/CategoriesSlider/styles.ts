import styled from "styled-components";

export const StyledDiv = styled.div`
    margin-top: 680px;
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
    overflow-x: scroll;


    //testes
    /* border: 1px solid red;
    .rail {
        border: 1px solid blue;
    } */

    //----------- trilho -----------//
    .rail {
        width: max-content;

        a {
            display: inline-block;
            margin: 0 5px;
            border: 1px solid #6DCD9F;
            color: #6DCD9F;
            padding: 8px 30px;
            border-radius: 20px;
            font-size: 14px;
            text-decoration: none;
        }
    }

    //----------- mobile -----------//
    @media(max-width: 650px){
        margin: 30px 10px;

        .rail {
            a{
                font-size: 12px;
            }
        }
    }
`;
