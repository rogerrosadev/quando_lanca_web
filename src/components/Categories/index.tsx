import { StyledDiv } from "./styles";

import { Slider } from "../Slider";

import  adventure from "../../assets/categories_icons/search.svg";
import action from "../../assets/categories_icons/action.svg";
import fps  from "../../assets/categories_icons/fps.svg";
import platform from "../../assets/categories_icons/plataforma.svg";
import race from "../../assets/categories_icons/corrida.svg";
import survivor from "../../assets/categories_icons/survivor.svg";
import strategy from "../../assets/categories_icons/estrategia.svg";
import fight from "../../assets/categories_icons/luta.svg";

const categories_mock = [
    {
        name: 'Aventura',
        icon: adventure
    },
    {
        name: 'Ação',
        icon: action
    },
    {
        name: 'FPS',
        icon: fps
    },
    {
        name: 'Plataforma',
        icon: platform
    },
    {
        name: 'Corrida',
        icon: race
    },
    {
        name: 'Horror',
        icon: survivor
    },
    {
        name: 'Estratégia',
        icon: strategy
    },
    {
        name: 'Luta',
        icon: fight
    },
]

export function Categories(){
    return(
        <StyledDiv>
            <Slider>
                {categories_mock.map(category => (
                    <span className="category">
                        <img src={category.icon} alt="ícone representativo da categoria" />
                        <p>{category.name}</p>
                    </span>
                ))}
            </Slider>
        </StyledDiv>
    );
}
