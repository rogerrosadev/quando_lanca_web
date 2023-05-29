import { Card } from "../../components/Card";
import { CardContainer } from "../../components/CardContainer";
import { Header } from "../../components/Header";
import { StyledSection } from "./styles";

export function Favorites(){
    return(
        <>
        <Header />
        <StyledSection>
            <h1 className="title">Meus Jogos Favoritados</h1>
            <div className="buttons_container">
                <button className="active">Todos</button>
                <button>Lançados</button>
                <button>Estão Chegando</button>
            </div>
            <div className="controllers">

            </div>
            <CardContainer label={''} title={''}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </CardContainer>
        </StyledSection>
        </>
    );
}
