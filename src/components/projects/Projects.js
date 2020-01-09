import React from 'react'
import { Jumbotron } from '../common/jumbotron/Jumbotron';
import SectionWithBg from '../common/SectionWithBg/SectionWithBg';
import {ProjectCard} from './ProjectCard/ProjectCard';
import { Row } from 'react-bootstrap';
import projectImage01 from './ProjectCard/project01.png';
import projectImage02 from './ProjectCard/project02.png';
import projectImage03 from './ProjectCard/project03.png';
// import projectImage04 from './ProjectCard/project04.png';
// import projectImage05 from './ProjectCard/project05.png';
// import projectImage06 from './ProjectCard/project06.png';
// import projectImage07 from './ProjectCard/project07.png';
// import projectImage08 from './ProjectCard/project08.png';
// import projectImage09 from './ProjectCard/project09.png';
// import projectImage10 from './ProjectCard/project10.png';
// import projectImage11 from './ProjectCard/project11.png';

export const Projects = (props) => (
  <div>
    <Jumbotron jumboClass='projects-slide' title='Projects' text='OPTIMIZE team has participated in many several projects as below'/>
    <SectionWithBg ImageClass='whiteSection'>
      <div className='projects-wrapper'>
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
    </SectionWithBg>
  </div>
)
