import { BsSearch } from 'react-icons/bs';
import { useState, useEffect } from 'react';
import { StyledNav } from './styles';
import logo from '../../assets/logo.svg';
import logoV2 from '../../assets/logoV2.svg';

export function Navbar(){
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        // Função para atualizar a largura da janela ao ser redimensionada
        const handleResize = () => {
          setWindowWidth(window.innerWidth);
        };

        // Adiciona um listener de redimensionamento ao carregar o componente
        window.addEventListener('resize', handleResize);

        // Remove o listener de redimensionamento ao desmontar o componente
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    return(
        <StyledNav>
            <a id="logo" href='#' >
                <img src={windowWidth > 650 ? logo : logoV2} alt="logo" />
            </a>

            {windowWidth < 650 && (
                <h1>Busque jogos para ver data de lançamento...</h1>
            )}

            <form action="" id="search">
                <input
                    type="text"
                    name="search"
                    placeholder={
                        windowWidth <= 650 ? (
                            "ex: forza horizon 6"
                        ):(
                            "Busque jogos para ver data de lançamento..."
                        )
                    }
                    />
                <button type="submit"><BsSearch style={{fill: 'D1D5DB'}} /></button>
            </form>
        </StyledNav>
    );
}
