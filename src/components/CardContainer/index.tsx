import { StyledSection } from "./styles";
import filter_icon from "../../assets/icons/filter_icon.svg";
import mobile_filter from "../../assets/icons/mobile_filter.svg";
import arrow_down from "../../assets/icons/arrow-down.svg";

interface CardContainerProps {
    title: String,
    label: String,
    children: React.ReactNode
}


export function CardContainer({ children, title, label }: CardContainerProps){
    return (
        <StyledSection>
            <div className="container_header">
                <div className="texts">
                    <h1>{title}</h1>
                    <label>{label}</label>
                </div>
                <div className="controls">

                    {/* ------------- transformar botões em componentes separados --------------  */}
                    <button className="order_by">
                        Mais próximo
                        <img src={arrow_down} alt="ícone de filtro" />
                    </button>
                    <button className="filter">
                        <img src={filter_icon} alt="ícone de filtro" />
                        Filtrar
                    </button>
                    <button className="mobile_filter_buttton">
                        <img src={mobile_filter} alt="" />
                    </button>
                </div>
            </div>
            <div className="container_body">
                {children}
            </div>
            <button className="ver_mais">Ver mais</button>
        </StyledSection>
    );
}
