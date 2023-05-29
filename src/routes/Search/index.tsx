import { Card } from "../../components/Card";
import { CardContainer } from "../../components/CardContainer";
import { Header } from "../../components/Header";
import { StyledSection } from "./styles";

export function Search(){
    return(
        <StyledSection>
            <Header />
            <div className="title_section">
                <h1>Pesquisando: <span>Resident Evil 4 Remake</span></h1>
                <p>Foram encontrados 0 resultados para esta pesquisa</p>
                <form action="">
                    {/* label: faça uma nova pesquisa */}
                    <input type="text" placeholder="Resident Evil 4 Remake" name="search_input" id="" />
                    <button type="submit">Pesquisar</button>
                </form>
            </div>
            <CardContainer label={''} title={''}>
                <Card />
                <Card />
            </CardContainer>
        </StyledSection>
    )
}
