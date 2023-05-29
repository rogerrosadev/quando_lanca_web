import { StyledButton } from "./styles";
import bookmark from "../../assets/icons/double_bookmark.svg";

import { Link } from "react-router-dom";

export function FloatingButton(){
    return(
        <StyledButton>
            <img src={bookmark} alt="" />
            <p>Favoritos</p>
        </StyledButton>
    )
}
