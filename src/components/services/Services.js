import React from 'react'
import { Jumbotron } from '../common/jumbotron/Jumbotron';
import SectionWithBg from '../common/SectionWithBg/SectionWithBg';
import { Row, Col } from 'react-bootstrap';
import {SideMenu} from './SideMenu/SideMenu';
import {ServicesContent} from './ServicesContent/ServicesContent';

export class Services extends React.Component{
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render(){
    return(
      <div>
        <Jumbotron jumboClass='services-slide' title='Services'/>
        <SectionWithBg ImageClass='whiteSection'>
          <Row>
            <Col xs={12} sm={4}>
              <SideMenu />
            </Col>
            <Col xs={12} sm={8}>
              <ServicesContent />
            </Col>
          </Row>
        </SectionWithBg >

      </div>
    )
  }

}
