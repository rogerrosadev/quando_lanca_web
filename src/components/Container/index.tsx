import { StyledSection } from "./styles";

interface ContainerProps {
    children: React.ReactNode;
}


//container limita o tamanho da disposição dos itens na página em no máximo 1440px
export function Container({ children }: ContainerProps){
    return(
        <StyledSection>
            { children }
        </StyledSection>
    )
}
