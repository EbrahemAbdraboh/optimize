import React, { Component } from 'react';
import SectionWithBg from '../../common/SectionWithBg/SectionWithBg';
import { Row, Col } from 'react-bootstrap';
import {Title} from '../../common/Title/Title';
import {MoreButton} from '../../common/MoreButton/MoreButton';
import bunner from './bunner.png';
import './TrainingSection.scss';


class TrainingSection extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {

    };
  }


  eventPrevent () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  render() {
    return(
        <SectionWithBg ImageClass='trainingSection'>
        <div className='training-wrapper'>
          <Title titleType='main-title' title='training' border='title-no-border' />
          <div className='training-content'>
            <Row>
              <Col xs={12} className='mobile-view'>
                <img src={bunner} alt='OPTIMIZE_Academy' />
              </Col>
              <Col xs={12} md={6}>
                <p>Our training solutions are developed by subject matter experts to help organizations and individuals improve personal competence and skills – core enablers of sustainable business development and competitive advantage.</p>
                <p style={{color:'#5a9ded'}}>Contact With Us:</p>
                <p>academy@optimize-engineering.com</p>

              </Col>
              <Col sm={6} className='mobile-hidden'>
                <img src={bunner} alt='OPTIMIZE_Academy' />
              </Col>

            </Row>
          </div>
          <MoreButton page={process.env.PUBLIC_URL + "/training"} prevent={this.eventPrevent}/>
        </div>
        </SectionWithBg>
    );
  }
};

export default TrainingSection;
