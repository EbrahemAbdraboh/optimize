import React from 'react';
import SectionWithBg from '../../common/SectionWithBg/SectionWithBg';
import {Title} from '../../common/Title/Title';
import {MoreButton} from '../../common/MoreButton/MoreButton';
import {ProjectCard} from '../../projects/ProjectCard/ProjectCard'

import './ProjectsSection.scss';


export class ProjectsSection extends React.Component{
    constructor(props) {
      super(props)
      this.state = {
        Projects: [
          {
            images: 'https://i.postimg.cc/9MqxMZNF/project01.png',
            title: 'Offshore Pipeline to Onshore GOSP Plant',
            capacity: '20,000 bbl/d',
            phase: 'Greenfield',
            executionFeas: 'execution-green',
            executionFEED: 'execution-green',
            executionDet: 'execution-green',

          },
          {
            images:'https://i.postimg.cc/Gh9jhk80/project02.png',
            title: 'Offshore FMP (Field Modification Plan) and FDP (Field Developemnt Plan)',
            capacity: '300K bbl/d',
            phase: 'Brownfield',
            executionFeas: 'execution-green',
            executionFEED: 'execution-green',
            executionDet: 'execution-green',

          },
          {
            images:'https://i.postimg.cc/XNs8b2vc/project03.png',
            title: 'PHA and HAZOP Analysis for 3 processing offshore platform',
            capacity: '300K bbl/d',
            phase: 'Brownfield',
            executionFeas: 'execution-gray',
            executionFEED: 'execution-green',
            executionDet: 'execution-green',

          }
        ]
      }
    }
    eventPrevent () {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    };
    render(){
      return(
        <SectionWithBg ImageClass='whiteSection'>
        <div className='projects-wrapper'>
          <Title titleType='main-title' title='Projects' border='title-no-border' />
          <div className='projects-content'>
            <ProjectCard Projects={this.state.Projects}/>
          </div>
          <MoreButton page='/Projects' prevent={this.eventPrevent}/>
        </div>
        </SectionWithBg>
    );
  }
}

export default ProjectsSection;
