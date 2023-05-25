import { StyledArticle } from "./styles";

import card_image from "../../assets/card_image.png";

export function Card(){
    return(
        <StyledArticle>
            <div className="header">
                <img src={card_image} alt="" />
            </div>
            <div className="body">
                <p>2 dias atrás</p>
                <h3>Resident Evil 4 Remake</h3>
                <p>Aventura, Survivor-Horror</p>
            </div>
        </StyledArticle>
    );
}
