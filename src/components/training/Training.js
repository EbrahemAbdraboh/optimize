import React from 'react'
import { Jumbotron } from '../common/jumbotron/Jumbotron';
import SectionWithBg from '../common/SectionWithBg/SectionWithBg';
import {TrainingtCard} from './TrainingtCard/TrainingtCard';
import { Row } from 'react-bootstrap';
import projectImage01 from './TrainingtCard/project01.png';
import projectImage02 from './TrainingtCard/project02.png';
import projectImage03 from './TrainingtCard/project03.png';

export const Training = (props) => (
  <div>
    <Jumbotron jumboClass='training-slide' title='Training'/>
    <SectionWithBg ImageClass='whiteSection'>
      <div className='projects-wrapper'>
        <Row>
          <TrainingtCard
            images={projectImage01}
            title='Offshore Pipeline to Onshore GOSP Plant'
            capacity='20,000 bbl/d'
            phase='Greenfield'
            executionFeas='execution-green'
            executionFEED='execution-green'
            executionDet='execution-green'
          />
          <TrainingtCard
            images={projectImage02}
            title='Strategic Gas Condensate Gas Plant Design'
            capacity='120MMSCFD'
            phase='Greenfield'
            executionFeas='execution-green'
            executionFEED='execution-gray'
            executionDet='execution-gray'
          />
          <TrainingtCard
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
