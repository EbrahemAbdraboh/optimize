import React from 'react';
import SectionWithBg from '../../common/SectionWithBg/SectionWithBg';
import { Row, Col } from 'react-bootstrap';
import {Title} from '../../common/Title/Title';
import {TextWithArrow} from '../../common/TextWithArrow/TextWithArrow';
import vision from './vision.png';
import './VisionSection.scss';


const ProfileSection = props => {
  return(
      <SectionWithBg ImageClass='whiteSection'>
        <div className='vision-content'>
          <Title titleType='sub-title' title='vision' border='title-border'/>
          <Row>
            <Col xs={12} className='mobile-view'>
              <img src={vision} alt='OPTIMIZE_Vision' />
            </Col>
            <Col xs={12} md={6}>
              <p className='vision-text'>OPTIMIZE aims to be the most competitive and the most productive engineering consultant in the world. Our core competencies in engineering, PMC and training are being continuously improved to be best-in-class. Our visions:</p>
              <TextWithArrow text='Committed empowered and innovative people.' />
              <TextWithArrow text='Operational Performance and adaptability.' />
              <TextWithArrow text='Industry leadership in health safety and environmental performance.' />
              <TextWithArrow text='Partner in sustained and social progress.' />
            </Col>
            <Col />
            <Col sm={5} className='mobile-hidden'>
              <img src={vision} alt='OPTIMIZE_Vision' />
            </Col>
          </Row>
        </div>
      </SectionWithBg>
  );
};

export default ProfileSection;
