import React from 'react'
import { Row, Col, Card } from 'react-bootstrap';
import authProfile from './profile.png';
import './TrainingtCard.scss';


export class TrainingtCard extends React.Component{
  render(){
    const {Courses} = this.props;
    const theCourses = Courses.map((course, index) => {
      return(
        <Col xs={12} sm={6} key={index}>
          <div className='course-item'>
            <Card>
              <Row>
                <Col xs={4} >
                  <div className='image-wrapper'>
                    <Card.Img variant="top" samesite="none" src={course.images} />
                  </div>
                </Col>
                <Col xs={8} >
                  <Card.Body>

                    <Card.Title>{course.title}</Card.Title>
                    <div className='auth-wrapper'>
                      <img src={authProfile} alt='Optimize Academy' />
                      <div className='auth-content'>
                        <p>{course.auth}</p>
                        <span>{course.type}</span>
                        <span className='time'>{course.time}</span>
                      </div>
                    </div>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </div>
        </Col>
      )
    })
    return(

      <div className='row'>
        {theCourses}
      </div>
    );
  }
}
