import React from 'react';
import SectionWithBg from '../../common/SectionWithBg/SectionWithBg';
import {Title} from '../../common/Title/Title';
import {MoreButton} from '../../common/MoreButton/MoreButton';
import { Row, Col } from 'react-bootstrap';
import bunner from './bunner.png';
import './CapabilitiesSection.scss';


const CapabilitiesSection = props => {
  return(
      <SectionWithBg ImageClass='whiteSection'>
        <div className='capabilities-wrapper'>
          <Title titleType='main-title' title='capabilities' border='title-no-border' />
          <div className='capabilities-container'>
            <Row>
              <Col md={12} xs={12}>
                <img src={bunner} alt='OPTIMIZE-Capabilities' />
              </Col>
            </Row>
          </div>
          <MoreButton page='/Capabilities'/>
        </div>
      </SectionWithBg>
  );
};

export default CapabilitiesSection;
