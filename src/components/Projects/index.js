import React, { useState } from "react";
import styled from "styled-components";
import Projectcard from "../Cards/Projectcard";
import { projects } from "../../data/constants";

 const Container = styled.div`
    background: linear-gradient(343.07deg, rgba(132, 59, 206, 0.06) 5.71%, rgba(132, 59, 206, 0) 64.83%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    clip-path: polygon(0 0, 100% 0, 100% 100%,100% 98%, 0 100%);
`;

 const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 10px 0px 100px 0;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

const Title = styled.div`
    font-size: 42px;
    font-weight: 600;
    text-align: center;
    margin-top: 20px;
    color: ${({theme}) => theme.text_primary};

    @media screen and (max-width: 768px){
        margin-top: 12px;
        font-size: 32px;
    }
`;

const Desc = styled.div`
    font-size: 18px;
    max-width: 600px;
    text-align: center;
    color: ${({theme}) => theme.text_secondary};

    @media screen and (max-width: 768px){
        font-size: 16px;
    }
`;

const ToggleGroup = styled.div`
    display: flex;
    border: 1.5px solid ${({theme}) => theme.primary};
    color: ${({theme}) => theme.primary};
    font-size: 16px;
    border-radius: 12px;
    font-weight: 500;
    margin: 22px 0;

    @media screen and (max-width: 768px){
        font-size: 12px;
    }
`;

const ToggleButton = styled.div`
    padding: 8px 18px;
    cursor: pointer;
    border-radius: 6px;

    ${({active, theme}) => {
       return active && `
            background-color: ${theme.primary + 20};
        `
    }}

    &:hover{
        background-color : ${({theme}) => theme.primary + 8};
    }

    @media screen and (max-width:768px){
        padding: 6px 8px;
        border-radius: 4px;
    }
`;

const Divider = styled.div`
    width: 1.5px;
    background-color: ${({theme}) => theme.primary};
`;

const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 28px;
`;

const Projects = () => {

    const[toggle, setToggle] = useState("all");

    return (
        <Container id="projects">
            <Wrapper>
            <Title>Projects</Title>
            <Desc>
                Here are some of the projects that I have created.
            </Desc>
            <ToggleGroup>
                {toggle === "all" ? 
                    (<ToggleButton active value="all" onClick={() => setToggle("all")}>All</ToggleButton>)
                    : (<ToggleButton  value="all" onClick={() => setToggle("all")}>All</ToggleButton>)
                    } 
                    
                
                <Divider />

                {toggle === "web app" ? (<ToggleButton active value="web app" onClick={() => setToggle("web app")}>Web Apps</ToggleButton>)
                 : (<ToggleButton value="web app" onClick={() => setToggle("web app")}>Web Apps</ToggleButton>)}
                
                <Divider />

                {toggle === "android app" ? (<ToggleButton active value="android app" onClick={() => setToggle("android app")}>Android Apps</ToggleButton>)
                 : (<ToggleButton value="android app" onClick={() => setToggle("android app")}>Android Apps</ToggleButton>)}
                
                <Divider />

                {toggle === "machine learning" ? (<ToggleButton active value="machine learning" onClick={() => setToggle("machine learning")}>Machine Learning</ToggleButton>) 
                : (<ToggleButton value="machine learning" onClick={() => setToggle("machine learning")}>Machine Learning</ToggleButton>)}
                
            </ToggleGroup>
            
                    <CardContainer>
                        {toggle==="all" && (projects.map((project) => <Projectcard project={project}/>
                        ))}
                        {projects
                            .filter((item) => item.category === toggle)
                            .map((project) => <Projectcard project={project}/>)}
                    </CardContainer>

            </Wrapper>
        </Container>
    )
};

export default Projects;