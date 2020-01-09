import React from 'react';
import SectionWithBg from '../../common/SectionWithBg/SectionWithBg';
import { Row } from 'react-bootstrap';
import {Title} from '../../common/Title/Title';
import {MoreButton} from '../../common/MoreButton/MoreButton';
import {ProjectCard} from '../../projects/ProjectCard/ProjectCard'
import projectImage01 from '../../projects/ProjectCard/project01.png';
import projectImage02 from '../../projects/ProjectCard/project02.png';
import projectImage03 from '../../projects/ProjectCard/project03.png';
import './ProjectsSection.scss';


const ProjectsSection = props => {
  return(
      <SectionWithBg ImageClass='whiteSection'>
      <div className='projects-wrapper'>
        <Title titleType='main-title' title='Projects' border='title-no-border' />
        <div className='projects-content'>
          <Row>
            <ProjectCard
              images={projectImage01}
              title='Offshore Pipeline to Onshore GOSP Plant'
              capacity='20,000 bbl/d'
              phase='Greenfield'
              executionFeas='execution-green'
              executionFEED='execution-green'
              executionDet='execution-green'
            />
            <ProjectCard
              images={projectImage02}
              title='Strategic Gas Condensate Gas Plant Design'
              capacity='120MMSCFD'
              phase='Greenfield'
              executionFeas='execution-green'
              executionFEED='execution-gray'
              executionDet='execution-gray'
            />
            <ProjectCard
              images={projectImage03}
              title='Waste Heat recovery Upgrade in LNG Plant'
              capacity='Two trains'
              phase='Brownfield'
              executionFeas='execution-gray'
              executionFEED='execution-green'
              executionDet='execution-green'
            />
          </Row>
        </div>
        <MoreButton page='/Projects'/>
      </div>
      </SectionWithBg>
  );
};

export default ProjectsSection;
