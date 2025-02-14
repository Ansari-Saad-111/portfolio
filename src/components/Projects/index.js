import React from 'react';
import styled from 'styled-components';
import { projects } from '../../data/constants';
import ProjectCard from '../Cards/ProjectCard';

const Container = styled.div`
    background: linear-gradient(343.07deg, rgba(132, 59, 206, 0.06) 5.71%, rgba(132, 59, 206, 0) 64.83%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    clip-path: polygon(0 0, 100% 0, 100% 100%,100% 98%, 0 100%);
`

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 10px 0px 80px 0;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`

const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
margin-top: 12px;
      font-size: 32px;
  }
`;

const Desc = styled.div`
    padding-bottom: 25px;
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-item: center;
  flex-wrap: wrap;
  gap: 20px;
`;

const Projects = ({openModal,setOpenModal}) => {
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
        Here are several of my projects.
        </Desc>
        <CardContainer>
          {projects.map((project) => (
            <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
          ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
};

export default Projects;
