import { StyledButton } from "./styles";
import { BsFillBookmarkFill } from 'react-icons/bs';

export function FloatingButton(){
    return(
        <StyledButton>
            <BsFillBookmarkFill style={{fill: '#fff'}} />
        </StyledButton>
    );
}
