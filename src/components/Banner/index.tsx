import { StyledDiv } from "./styles";
import banner from '../../assets/Banner.svg'

export function Banner(){
    return(
        <StyledDiv>
            <img src={banner} alt="leon" />
        </StyledDiv>
    )
}
