import React from 'react';
import SectionWithBg from '../../common/SectionWithBg/SectionWithBg';
import { Row, Col } from 'react-bootstrap';
import {Title} from '../../common/Title/Title';
import profile from './profile.png';
import './ProfileSection.scss';


const ProfileSection = props => {
  return(
      <SectionWithBg ImageClass='graySection'>
        <div className='profile-content'>
          <Title titleType='sub-title' title='Profile' border='title-border'/>
          <Row>
            <Col xs={12} className='mobile-view'>
              <img src={profile} alt='OPTIMIZE_Profile' />
            </Col>
            <Col xs={12} md={6}>
              <p className='profile-text'>Our robust knowledge-based approach and dedication to quality and safety allow us to provide the best-in-class engineering and innovative solutions to every part of the oil and gas industry.</p>
            </Col>
            <Col />
            <Col sm={5} className='mobile-hidden'>
              <img src={profile} alt='OPTIMIZE_Profile' />
            </Col>
          </Row>
        </div>
      </SectionWithBg>
  );
};

export default ProfileSection;
