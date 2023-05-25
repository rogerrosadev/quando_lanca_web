import { Card } from "../Card";
import { StyledDiv } from "./styles";

import chevron_left from "../../assets/icons/chevron_left.svg";
import chevron_right from "../../assets/icons/chevron_right.svg";

interface CardSliderProps {
    children: React.ReactNode,
    title: String
}

export function CardSlider({children, title}: CardSliderProps){
    return(
        <StyledDiv>
            <div className="slider_header">
                <h1>{title}</h1>
                <div className="controllers">
                    <img src={chevron_left} alt="" />
                    <img src={chevron_right} alt="" />
                </div>
            </div>
            <div className="viewport">
                <div className="rail">
                    {children}
                </div>
            </div>
        </StyledDiv>
    )
}
