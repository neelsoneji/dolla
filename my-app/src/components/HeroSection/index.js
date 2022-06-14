import React, { useState } from "react";
import { Button } from "../ButtonElement";
import Video from "../../videos/video.mp4";
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight,
} from "./HeroElements";

const HeroElement = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    };

    return ( <
        HeroContainer >
        <
        HeroBg >
        <
        VideoBg autoPlay muted loop src = { Video }
        type = "video/mp4" / >
        <
        /HeroBg> <
        HeroContent >
        <
        HeroH1 > CRYPTO & FIAT SERVICES < /HeroH1> <
        HeroP >
        Get started with the easiest and most secure platform to buy, sell,
        trade and earn cryptocurrencies. <
        /HeroP> <
        HeroBtnWrapper >
        <
        Button to = "signup"
        onMouseEnter = { onHover }
        onMouseLeave = { onHover } >
        Get Started { hover ? < ArrowForward / > : < ArrowRight / > } <
        /Button> <
        /HeroBtnWrapper> <
        /HeroContent> <
        /HeroContainer>
    );
};

export default HeroElement;