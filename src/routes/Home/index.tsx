import { Categories } from "../../components/Categories";
import { Cover } from "../../components/Cover";
import { Header } from "../../components/Header";
import { StyledSection } from "./styles";

import banner from "../../assets/images/Banner.svg";
import { Card } from "../../components/Card";
import { CardContainer } from "../../components/CardContainer";
import { Container } from "../../components/Container";
import { CardSlider } from "../../components/CardSlider";
import { VideoCard } from "../../components/VideoCard";
import { NewsletterForm } from "../../components/NewsletterForm";


export function Home(){
    return(
        <StyledSection>
            <Header />
            <Cover />
            {/* <Categories /> */}


            <Container>
                {/* <CardContainer
                    title="Chegam Em Breve"
                    label="151,146 jogos encontrados"
                >

                </CardContainer> */}
                <CardSlider title="Recém Lançados">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </CardSlider>
            </Container>
            <CardContainer label="" title="Chegam Em Breve">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </CardContainer>
            <NewsletterForm />
            <CardSlider title="Últimos Trailers">
                <VideoCard />
                <VideoCard />
                <VideoCard />
            </CardSlider>
        </StyledSection>
    )
}
