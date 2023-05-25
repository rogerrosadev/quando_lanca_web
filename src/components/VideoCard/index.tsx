import { StyledArticle } from "./styles";

import play from "../../assets/icons/play_icon.svg";
import thumbnail from "../../assets/images/video_thumbnail.png";

export function VideoCard(){
    return(
        <StyledArticle>
            <div className="thumbnail">
                <img src={thumbnail} alt="capa do video" />
                <img src={play} className="play" alt="botão de play" />
            </div>
            <p>Silent Hill 2 Remake (2023)</p>
        </StyledArticle>
    )
}
