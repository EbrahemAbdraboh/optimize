import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import egypt from './egypt-flag.png';
import qatar from './qater-flag.png';
import syrbia from './syrbia-flag.png';
import uk from './uk-flag.png';
import './Footer.scss';


export const Footer = props => {
  return(
    <div className="footer">
      <Container>
        <Row>
          <Col xs={12}  md={4} >
            <div className="logo">
              <img src={logo} alt='Optimize-engineering'/>
            </div>
            <p className='email'>engineering@optimize-engineering.com</p>
            <div className='social'>
              <span className="facebook" >
                <Link to="https://www.facebook.com/Optimize-Engineering-108050993934571/" target='_blank'></Link>
              </span>
              <span className="linkedin">
                <Link to="https://www.linkedin.com/company/optimize-hydrocarbon-energey/" target='_blank'></Link>
              </span>
            </div>
          </Col>
          <Col xs={12}  md={{ span: 3, offset: 1 }} >
          <div className="contacts">
            <p>Site Map</p>
            <ul >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/capabilities">Capabilities</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/training">Training</Link>
              </li>

            </ul>

          </div>
          </Col>
          <Col xs={12}  md={4} >
            <div className="contacts">
              <p>Contacts</p>
              <div className="cell-number">
                <img src={egypt} alt='Optimize-engineering'/>
                <span>+201016296960</span>
              </div>
              <div className="cell-number">
                <img src={qatar} alt='Optimize-engineering'/>
                <span>+97477198200</span>
              </div>
              <div className="cell-number">
                <img src={syrbia} alt='Optimize-engineering'/>
                <span>+381655255858</span>
              </div>
              <div className="cell-number">
                <img src={uk} alt='Optimize-engineering'/>
                <span>+447500903775</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="copyright">
        <p>Copyright 2019 OPTIMIZE</p>
      </div>
    </div>

  );
};
