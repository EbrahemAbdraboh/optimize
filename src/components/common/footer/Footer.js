import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import egypt from './egypt-flag.png';
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
                <Link to="/" onClick={props.prevent}>Home</Link>
              </li>
              <li>
                <Link to="/about" onClick={props.prevent}>About</Link>
              </li>
              <li>
                <Link to="/capabilities" onClick={props.prevent}>Capabilities</Link>
              </li>
              <li>
                <Link to="/services" onClick={props.prevent}>Services</Link>
              </li>
              <li>
                <Link to="/projects" onClick={props.prevent}>Projects</Link>
              </li>
              <li>
                <Link to="/training" onClick={props.prevent}>Training</Link>
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
