import { StyledForm } from "./styles";
import send_icon from "../../assets/icons/send_icon.svg";

export function NewsletterForm(){
    return(
        <StyledForm>
            <h1>Fique por dentro de novos anuncios do mundo dos jogos</h1>
            <div className="input_box">
                <input type="text" placeholder="Digite o seu E-mail" id="" />
                <button><img src={send_icon} alt="enviar" /></button>
            </div>
        </StyledForm>
    )
}
