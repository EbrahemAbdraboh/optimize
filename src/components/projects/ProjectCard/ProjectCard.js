import React from 'react'
import { Row, Col, Card } from 'react-bootstrap';
import './ProjectCard.scss';


export class ProjectCard extends React.Component{
  render(){
    const {Projects} = this.props;
    const theProjects = Projects.map((project, index) => {
      return(
        <Col xs={12} sm={6} lg={4} key={index}>
          <div className='project-item'>
            <Card>
              <div className='image-wrapper'>
                <Card.Img variant="top" samesite="none" src={project.images} />
              </div>
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Row>
                  <Col xs={5} sm={4}>
                    <p className='title'>Capacity</p>
                    <p className='title'>Phase</p>
                    <p className='title'>Execution</p>
                  </Col>
                  <Col xs={7} sm={8}>
                    <p className='text'>{project.capacity}</p>
                    <p className='text'>{project.phase}</p>
                  </Col>
                  <Col xs={4}>
                    <p className={project.executionFeas}>Feasibility</p>
                  </Col>
                  <Col xs={4}>
                    <p className={project.executionFEED}>FEED</p>
                  </Col>
                  <Col xs={4}>
                    <p className={project.executionDet}>Detailed</p>
                  </Col>
                </Row>

              </Card.Body>
            </Card>
          </div>
        </Col>
      )
    })
    return(

      <div className='row'>
        {theProjects}
      </div>
    );
  }
}
