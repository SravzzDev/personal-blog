import React from "react";
import styled from "styled-components";
import { Bio } from "../../data/constants";
import Typewriter from "typewriter-effect";
import profile from "../../Images/profile.jpeg";
import HeroBgAnimation from "../HeroBgAnimation";

const HeroContainer = styled.div`
    background-color: ${({theme}) => theme.card_light};
    display: flex;
    justify-content: center;
    position: relative;
    padding: 80px 30px;

    @media screen and (max-width: 960px){
        padding: 66px 16px;
    }

    @media screen and (max-width: 640px){
        padding: 32px 16px;
    }

    z-index: 1;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;

const HeroBg = styled.div`
    position: absolute;
    display: flex;
    justify-content: end;
    top: 50%;
    right: 0;
    bottom: 0;
    left: 50%;
    overflow: hidden;
    width: 71%;
    height: 81%;
    padding: 0 30px;
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);

    @media screen and (max-width: 960px){
        padding 0 0px;
        justify-content: center;
    }
`;

const HeroInnerContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1100px;

    @media screen and (max-width: 960px){
        flex-direction: column;
    }
`;

const HeroLeftContainer = styled.div`
    width: 100%;
    order: 1;
    
    @media screen and (max-width: 960px){
        order: 2;
        margin-bottom: 32px;
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    @media screen and (max-width: 640px){
        order: 2;
        margin-bottom: 32px;
        display: flex;
        align-items: center;
        flex-direction: column;
    }
`;

const HeroRightContainer = styled.div`
    width: 100%;
    order: 2;
    display: flex;
    justify-content: end;
    gap: 12px;
    @media screen and (max-width: 960px){
        order: 1;
        margin-bottom: 80px;
        justify-content: center;
        align-items: center;
    }

    @media screen and (max-width: 640px){
        order: 1;
        margin-bottom: 30px;
    }
`;

const Title = styled.div`
    font-size: 50px;
    font-weight: 700;
    color: ${({theme}) => theme.text_primary};
    line-height: 68px;

    @media screen and (max-width: 960px){
        text-align: center;
    }

    @media screen and (max-width: 640px){
        font-size: 40px;
        line-height: 48px;
        margin-bottom : 8px;
    }
`;

const TextLoop = styled.div`
    font-size: 32px;
    font-weight: 600;
    color: ${({theme})=> theme.text_primary};
    line-height: 68px;
    gap: 12px;
    display: flex;

    @media screen and (max-width: 960px){
        text-align: center;
    }

    @media screen and (max-width: 640px){
        font-size: 22px;
        line-height: 48px;
        margin-bottom: 16px;
    }
`;

const Span = styled.span`
    color: ${({theme}) => theme.primary};
    cursor: poiner;
`;

const SubTitle = styled.div`
    font-size: 20px;
    color: ${({theme}) => theme.text_primary+95};
    line-height: 32px;
    margin-bottom: 42px;

    @media screen and (max-width: 960px){
        text-align: center;
    }
    
    @media screen and (max-width: 640px){
        font-size: 16px;
        line-height: 32px;
    }
`;



const Img = styled.img`
    width: 100%;
    height: 100%;
    position: relative;
    border-radius: 50%;
    max-width: 400px;
    max-height: 400px;
    object-fit: cover;
    object-position: center;
    border: 2px solid ${({theme}) => theme.primary};
    
    @media screen and (max-width: 768px){
        max-width: 400px;
        max-height: 400px;
    }

    @media screen and (max-width: 640px){
        max-width: 280px;
        max-height: 280px;
    }
    `;


    const Hero = () => {
        return (
            <div id="about">
                <HeroContainer>
                    <HeroBg>
                        <HeroBgAnimation />
                    </HeroBg>
                    <HeroInnerContainer >
                        <HeroLeftContainer id="Left">
                            <Title>Hi, I am <br /> {Bio.name}</Title>
                            <TextLoop>
                                I am a
                                <Span>
                                    <Typewriter
                                        options={{
                                            strings: Bio.roles,
                                            autoStart: true,
                                            loop: true,
                                        }}
                                    />
                                </Span>
                            </TextLoop>
                            <SubTitle>{Bio.description}</SubTitle>
                        </HeroLeftContainer>
    
                        <HeroRightContainer id="Right">
    
                            <Img src={profile} alt="hero-image" />
                        </HeroRightContainer>
                    </HeroInnerContainer>
    
                </HeroContainer>
            </div>
        )
    }
    
    export default Hero;