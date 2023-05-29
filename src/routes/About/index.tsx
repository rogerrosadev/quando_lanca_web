import { Card } from "../../components/Card";
import { CardContainer } from "../../components/CardContainer";
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { StyledSection } from "./styles";

import { game_mock } from "./game_mock";
import card_image from "../../assets/card_image.png";
import main_image from "../../assets/overview_slider_images/main_image.png";
import img1 from "../../assets/overview_slider_images/sm_img1.png";
import img2 from "../../assets/overview_slider_images/sm_img2.png";
import img3 from "../../assets/overview_slider_images/sm_img3.png";

export function About(){
    return(
        <>
        <Header />
        <Container>
        <StyledSection>
            <section className="game_overview">
                <div className="game_cover">
                    <img src={card_image} alt="" />
                    <div className="buy_game">
                        alguma informação relevante
                    </div>
                </div>

                <div className="about">
                    <h1>{game_mock.title}</h1>
                    <p>
                        {game_mock.description}
                    </p>

                    <div className="infos">
                        <ul>
                            <li>
                                <p>Data de lançamento</p>
                                <p>22 de Abril de 2023</p>
                            </li>
                            <li>
                                <p>Categorias</p>
                                <p>Ação, Aventura, Survivor-Horror, Terror</p>
                            </li>
                            <li>
                                <p>Plataformas</p>
                                <p>Playstation 5, Xbox Series S/X, PC</p>
                            </li>
                            <li>
                                <p>Modos</p>
                                <p>Single Player</p>
                            </li>
                            <li>
                                <p>Classificação Indicativa</p>
                                <p>16 anos</p>
                            </li>
                            <li>
                                <p>Desenvolvedora</p>
                                <p>Capcom</p>
                            </li>
                        </ul>

                        <div className="counter">
                            <div className="counter_box">
                                <h2>12</h2>
                                <p>dias</p>
                            </div>
                            <div className="counter_box">
                                <h2>6</h2>
                                <p>horas</p>
                            </div>
                            <div className="counter_box">
                                <h2>43</h2>
                                <p>minutos</p>
                            </div>
                            <div className="counter_box">
                                <h2>34</h2>
                                <p>segundos</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="game_images_slider">
                <div className="main_image_container">
                    <img src={main_image} alt="" />
                </div>
                <div className="controllers">
                    <div className="">seta</div>
                    <div className="bottom_images_container">
                        <img src={img1} alt="" />
                        <img src={img2} alt="" />
                        <img src={img3} alt="" />
                    </div>
                    <div className="">seta</div>
                </div>
            </div>

            <CardContainer title="relacionados" label={''}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </CardContainer>

        </StyledSection>
        </Container>
        </>
    )
}
