import { StyledSection } from "./styles";

import cover from "../../assets/images/cover.png";
import mobile_cover from "../../assets/images/Banner.svg";
import { Container } from "../Container";
import { Categories } from "../Categories";
// import { Categories } from "../Categories";

export function Cover(){
    return(
        <Container>
            <StyledSection>
                <img src={cover} alt="capa" />
                <h1>Todos os lançamentos em um só lugar</h1>
                <Categories />
            </StyledSection>
        </Container>
    )
}
