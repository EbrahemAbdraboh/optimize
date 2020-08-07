import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import RadioButton from './RadioButton/RadioButton';
import SearchBox from './SearchBox/SearchBox';
import './ControlPanel.scss';



export class ControlPanel extends React.Component{
  constructor(props, context) {
    super(props, context);
    this.state = {

    }
  }



  render(){
    return(
      <div className='control-panel-wrapper'>
        <Container>
          <Row>
            <Col md={12} lg={8} className='filter-content'  >
              <RadioButton
                    changed={ this.props.radioChangeHandler }
                    id="1"
                    isSelected={this.props.allSelect}
                    label="All"
                    value="Course"
                />
                <RadioButton
                    changed={ this.props.radioChangeHandler }
                    id="2"
                    isSelected={this.props.processSelect}
                    label="Process"
                    value="Process"
                />
                <RadioButton
                    changed={ this.props.radioChangeHandler }
                    id="3"
                    isSelected={this.props.hseSelect}
                    label="HSE"
                    value="HSE"
                />
                <RadioButton
                    changed={ this.props.radioChangeHandler }
                    id="4"
                    isSelected={this.props.mechanicalSelect}
                    label="Mechanical"
                    value="Mechanical"
                />

            </Col>
            <Col md={12} lg={4} className='search-content' >
              <SearchBox searchBoxOnchange={this.props.searchBoxOnchange}/>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
