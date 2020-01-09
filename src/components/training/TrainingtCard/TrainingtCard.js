import React from 'react'
import { Row, Col, Card } from 'react-bootstrap';

import './TrainingtCard.scss';

export class TrainingtCard extends React.Component{
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render(){
    return(
      <Col xs={12} sm={6} lg={4}>
        <div className='project-item'>
          <Card>
            <Card.Img variant="top" src={this.props.images} />
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
          </Card>
        </div>
      </Col>

    );
  }
}
