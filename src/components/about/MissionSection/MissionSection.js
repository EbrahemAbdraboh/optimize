import React from 'react';
import SectionWithBg from '../../common/SectionWithBg/SectionWithBg';
import { Row, Col } from 'react-bootstrap';
import {Title} from '../../common/Title/Title';
import mission from './mission.png';
import icon01 from './icon01.png';
import icon02 from './icon02.png';
import icon03 from './icon03.png';
import './MissionSection.scss';


const MissionSection = props => {
  return(
      <SectionWithBg ImageClass='graySection'>
        <div className='mission-content'>
          <Title titleType='sub-title' title='mission' border='title-border'/>
          <Row>
            <Col xs={12} className='mobile-view'>
              <img src={mission} alt='OPTIMIZE_mission' />
            </Col>
            <Col xs={12} md={6}>
              <p className='mission-text'>OPTIMIZE is a leading consulting company assets and delivers a wide-ranging services in the energy, chemicals and resources sectors.</p>
              <p className='mission-text'>We provide our customers with a wide spectrum of consulting and advisory services, and deep technical expertise across multiple projects. Our integrated offerings cover full asset management services and engineering, procurement and construction capability. We deliver these outcomes through our three business pillars – SMEs (Subject Matter Experts), Major Projects and Integrated Solutions.</p>
            </Col>
            <Col>
            </Col>
            <Col sm={5} className='mobile-hidden'>
              <img src={mission} alt='OPTIMIZE_mission' />
            </Col>
            <Col xs={12} md={4}>
              <div className='icons-wrapper'>
                <img src={icon01} alt='OPTIMIZE_mission' />
                <p className='mission-icons-title'>SME</p>
                <span className='mission-icons-text'>Global SMEs who provide stratgic advice, integrated with deep technical expertise to clients in the energy, resources and infrastructure sectors.</span>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className='icons-wrapper'>
                <img src={icon02} alt='OPTIMIZE_mission' />
                <p className='mission-icons-title'>Integrated Solutions</p>
                <span className='mission-icons-text'>Integrated solutions delivers maintenance, modification, operations, engineering, fabrication, construction, hook-up and commissioning in support of greenfield and brownfield assets.</span>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className='icons-wrapper'>
                <img src={icon03} alt='OPTIMIZE_mission' />
                <p className='mission-icons-title'>Major Projects</p>
                <span className='mission-icons-text'>Specialists in full project deliver of large, complex, strategically important projects wherever they are in the world.</span>
              </div>
            </Col>

            <Col>
              <p className='mission-text'>OPTIMIZE offers the best-in-class engineering services in oil & Gas, upstream and downstream projects.</p>
              <p className='mission-text'>Starting from inception of conceptual studies, Simulations, value engineering studies, cost estimation and project evaluation, FEED, Detailed engineering, safety studies, and assisting in tendering, procurement, up to start-up.</p>
              <p className='mission-text'>OPTIMIZE has the capabilities to team up with customers and assess different phases of the project helping the customer to reach an optimum conclusion.</p>
              <p className='mission-text'>OPTIMIZE over the years has acquired the best-in-class experience, in upstream, midstream and downstream facilities, LNG and NGL including, onshore/offshore production facilities, oil Terminals, storage tanks farm/truck loading facilities, marine facilities (Oil Platforms, MOPU, and Oil piers, pumping stations, pipelines, gathering systems, custody transfer metering, utility stations).</p>
            </Col>
          </Row>
        </div>
      </SectionWithBg>
  );
};

export default MissionSection;
