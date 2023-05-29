import { StyledNav } from "./styles";

import { BiHomeAlt2 } from 'react-icons/bi';
import { BsSearch, BsBookmark } from 'react-icons/bs';

export function TabBar(){
    return(
        <StyledNav>
            <a href=""><BsSearch className="icon" /></a>
            <a href="/"><BiHomeAlt2 className="icon" /></a>
            <a href="/favorites"><BsBookmark className="icon" /></a>
        </StyledNav>
    );
}
