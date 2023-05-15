import { Navbar } from "../../components/Navbar";
import { AppLimiter } from "../AppLimiter";
import { Banner } from "../Banner";
import { Mosaic } from "../Mosaic";
import { Video } from "../Video";

export function Cover(){
    return(
        <AppLimiter>
            <Video />
            <Navbar />
            <Mosaic />
            <Banner />
        </AppLimiter>
    )
}
