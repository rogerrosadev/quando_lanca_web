import { StyledDiv } from './styles';
import image1 from '../../assets/mosaic/assassins_creed.svg';
import image2 from '../../assets/mosaic/devil_may_cry.svg';
import image3 from '../../assets/mosaic/gta5.svg';
import image4 from '../../assets/mosaic/mario.svg';
import image5 from '../../assets/mosaic/the_last_of_us.svg';

export function Mosaic(){
    return(
        <StyledDiv>
            {/* <img src={image} alt="" /> */}

            <figure>
                <div className='image img1'>
                    <img src={image2} alt="imagem mosaico" />
                </div>
                <div className='image img2'>
                    <img src={image5} alt="imagem mosaico" />
                </div>
                <div className='image img3'>
                    <img src={image1} alt="imagem mosaico" />
                </div>
                <div className='image img4'>
                    <img src={image4} alt="imagem mosaico" />
                </div>
                <div className='image img5'>
                    <img src={image3} alt="imagem mosaico" />
                </div>
            </figure>
        </StyledDiv>
    );
}
