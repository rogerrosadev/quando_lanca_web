import { useState, useEffect, useRef } from 'react';
import { StyledDiv } from "./styles";
import { motion } from 'framer-motion';

import imagem from '../../assets/imagem_teste.jpg';

const images = [imagem, imagem, imagem, imagem];


interface SliderProps {
    children: React.ReactNode
}

export function Slider({children}: SliderProps){
    const carousel = useRef<any>();
    const [width, setWidth] = useState(0)

    useEffect(() => {
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);

    }, []);


    return(
        <StyledDiv>
            <motion.div ref={carousel} className='carousel' whileTap={{ cursor: 'grabbing' }}>
                <motion.div
                    className='inner'
                    drag="x"
                    dragConstraints={{ right: 0, left: -width }}
                >
                    {children}
                </motion.div>
            </motion.div>
        </StyledDiv>
    );
}
