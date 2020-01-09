import React from 'react'
import { Row, Col, Card } from 'react-bootstrap';

import './ProjectCard.scss';

export class ProjectCard extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      hover: false
    }
  }
  onMouseEnterHandler = () => {
      this.setState({
          hover: true
      });

  }
  onMouseLeaveHandler = () => {
      this.setState({
          hover: false
      });

  }

  render(){
    var inner = normal;
    if(this.state.hover) {
        inner = hover;
    }
    return(
      <Col xs={12} sm={6} lg={4}>
        <div className='project-item'>
          <Card>
            <div className='image-wrapper'>
              <Card.Img variant="top" src={this.props.images} />
            </div>
            <Card.Body>
              <Card.Title>{this.props.title}</Card.Title>
              <Row>
                <Col xs={5} sm={4}>
                  <p className='title'>Capacity</p>
                  <p className='title'>Phase</p>
                  <p className='title'>Execution</p>
                </Col>
                <Col xs={7} sm={8}>
                  <p className='text'>{this.props.capacity}</p>
                  <p className='text'>{this.props.phase}</p>
                </Col>
                <Col xs={4}>
                  <p className={this.props.executionFeas}>Feasibility</p>
                </Col>
                <Col xs={4}>
                  <p className={this.props.executionFEED}>FEED</p>
                </Col>
                <Col xs={4}>
                  <p className={this.props.executionDet}>Detailed</p>
                </Col>
              </Row>

            </Card.Body>
            <div
              style={inner}
              onMouseEnter={this.onMouseEnterHandler}
              onMouseLeave={this.onMouseLeaveHandler} >
              <div className='card-hover'>
                <Card.Title>{this.props.title}</Card.Title>
              </div>
            </div>
          </Card>
        </div>
      </Col>

    );
  }
}

var normal = {
    opacity: 0,
    WebkitTransition: 'all 0.4s ease-in-out',
    MozTransition: 'all 0.4s ease-in-out',
    OTransition: 'all 0.4s ease-in-out',
    transition: 'all 0.4s ease-in-out',
}

var hover = {
    opacity: 1,
    WebkitTransition: 'all 0.4s ease-in-out',
    MozTransition: 'all 0.4s ease-in-out',
    OTransition: 'all 0.4s ease-in-out',
    transition: 'all 0.4s ease-in-out',
}
