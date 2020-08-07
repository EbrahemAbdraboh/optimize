import React, { Component } from 'react';
import SectionWithBg from '../../common/SectionWithBg/SectionWithBg';
import {Title} from '../../common/Title/Title';
import {MoreButton} from '../../common/MoreButton/MoreButton';
import './AboutSection.scss';


class AboutSection extends Component {
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
        <SectionWithBg ImageClass='aboutSection'>
          <div className='about-wrapper '>
            <Title titleType='main-title' title='about' border='title-no-border' />
            <p className='about-description'>Our robust knowledge-based approach and dedication to quality and safety allow us to provide the best-in-class engineering and innovative solutions to every part of the oil and gas industry</p>
            <MoreButton page={process.env.PUBLIC_URL + "/about"} prevent={this.eventPrevent}/>
          </div>
        </SectionWithBg>
    );
  }
};

export default AboutSection;
