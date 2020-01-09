import React from 'react';
import SectionWithBg from '../../common/SectionWithBg/SectionWithBg';
import {Title} from '../../common/Title/Title';
import {MoreButton} from '../../common/MoreButton/MoreButton';
import { Row, Col } from 'react-bootstrap';
import icon01 from './icon01.png';
import icon02 from './icon02.png';
import icon03 from './icon03.png';
import icon04 from './icon04.png';
import './ServicesSection.scss';


const ServicesSection = props => {
  return(
      <SectionWithBg ImageClass='servicesSection'>
        <div className='services-wrapper'>
          <Title titleType='main-title' title='services' border='title-no-border' />
          <div className='services-icons-container'>
            <Row>
              <Col md={3} sm={6} xs={12}>
                <img src={icon01} alt='OPTIMIZE-services' />
                <p>Engineering</p>
                <p>Services</p>
              </Col>
              <Col md={3} sm={6} xs={12}>
                <img src={icon02} alt='OPTIMIZE-services' />
                <p>Health & Safety</p>
                <p>HSE</p>
              </Col>
              <Col md={3} sm={6} xs={12}>
                <img src={icon03} alt='OPTIMIZE-services' />
                <p>Project</p>
                <p>Management</p>
              </Col>
              <Col md={3} sm={6} xs={12}>
                <img src={icon04} alt='OPTIMIZE-services' />
                <p>Construction</p>
                <p>Supervision</p>
              </Col>
            </Row>
          </div>
          <MoreButton page='/Services'/>
        </div>
      </SectionWithBg>
  );
};

export default ServicesSection;
