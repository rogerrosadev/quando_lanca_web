import { Container } from "../Container";
import { StyledHeader } from "./styles";

import logo from "../../assets/logo.svg";
import searchIcon from "../../assets/icons/search_icon.svg";
import return_arrow from "../../assets/icons/return_arrow.svg";
import marker from "../../assets/icons/marker.svg";

import { Link } from "react-router-dom";

import { HeaderProps } from "./interface";

export function Header({variant}: HeaderProps){
    return(
        <StyledHeader variant={variant}>
            {/* header pode se expandir mais que o container, para que bora inferior ocupe sempre toda a tela */}
            <Container>

                {/* logo e icones mobile */}
                <div className="top">
                    <a className="return_arrow" href=""><img src={return_arrow} alt="" /></a>
                    <Link to={'/'}><img src={logo} alt="logo" className="logo" /></Link>
                    <a className="marker" href=""><img src={marker} alt="" /></a>
                </div>

                {/* formulário de pesquisa */}
                <label>O que você quer jogar?</label>
                <form action="" className="search_form">
                    <input type="text" placeholder="Busque para ver a data de lançamento" />
                    <button type="submit">
                        <img src={searchIcon} alt="ícone de lupa" />
                    </button>
                </form>
            </Container>
        </StyledHeader>
    );
}
