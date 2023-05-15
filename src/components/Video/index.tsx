import { useRef, useEffect } from 'react';
import video from '../../assets/re4remake.mp4';
import { StyledVideo } from './styles';

export function Video(){
    const $videoPlayer = useRef(null);

    useEffect(() => {
        $videoPlayer.current.play();
    }, []);

    return(
        <div>
        <StyledVideo
            ref={$videoPlayer}
            src={video}
        >
        </StyledVideo>
        </div>
    )
}
