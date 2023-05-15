import styled from "styled-components";

export const StyledNav = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

    //----------- logo -----------//
    #logo {
        margin-top: 20px;
        margin-bottom: 10px;

    }

    //----------- search -----------//
    #search {
        max-width: 570px;
        width: 100%;
        padding: 0 10px;
        position: relative;

        input {
            width: 100%;
            height: 40px;
            border: 2px solid #D1D5DB;
            background-color: transparent;
            border-radius: 20px;
            padding: 0 10px;
        }

        button {
            position: absolute;
            right: 10px;
            width: 40px;
            border-radius: 0 50% 50% 0;
            background-color: transparent;
            line-height: 40px;
        }
    }


    //----------- texto -----------//
    h1 {
        margin-left: 10px;
        padding-right: 20%;
        margin-bottom: 10px;
    }

    //----------- imagens -----------//
    //----------- imagens -----------//

`;
