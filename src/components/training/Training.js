import React from 'react'
import { Jumbotron } from '../common/jumbotron/Jumbotron';
import SectionWithBg from '../common/SectionWithBg/SectionWithBg';
import {TrainingtCard} from './TrainingtCard/TrainingtCard';
import {ControlPanel} from './ControlPanel/ControlPanel';



export class Training extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      checked: 'Course',
      filterFiled: '',
      searchFiled: '',
      Courses: [
        {
          images: 'https://i.postimg.cc/PJq7PQ3d/course01.png',
          time: '3 Days',
          title: 'Introduction: Basics and principles of refinery operations',
          auth: 'Eng. Emad El-Gebesy',
          type: 'Process Course',
        },
        {
          images: 'https://i.postimg.cc/2yXKvLMh/course02.png',
          time: '5 Days',
          title: 'Advanced: Modeling and Optimization of various refinery operations',
          auth: 'Eng. Emad El-Gebesy',
          type: 'Process Course',
        },
        {
          images: 'https://i.postimg.cc/HLQRKx81/course03.png',
          time: '3 Days',
          title: 'Advanced Analysis and Machine Learning Application of Fluid Catalytic Cracking unit',
          auth: 'Eng. Emad El-Gebesy',
          type: 'Process Course',
        },
        {
          images: 'https://i.postimg.cc/pTC7W6B0/course04.png',
          time: '3 Days',
          title: 'Advanced Analysis and Machine Learning Application of Catalytic Reforming unit',
          auth: 'Eng. Emad El-Gebesy',
          type: 'Process Course',
        },
        {
          images: 'https://i.postimg.cc/xT4wNBVh/course05.png',
          time: '3 Days',
          title: 'Crude Distillation Unit Optimization using SQP Programming and GEKKO for Dynamic Optimization',
          auth: 'Eng. Emad El-Gebesy',
          type: 'Process Course',
        },
        {
          images: 'https://i.postimg.cc/hGFNpxj0/course06.png',
          time: '3 Days',
          title: 'Using SciPy and GEKKO for solving differential equations and its Applications in refineries',
          auth: 'Eng. Emad El-Gebesy',
          type: 'Process Course',
        },
        {
          images: 'https://i.postimg.cc/d1wpKYGk/course07.png',
          time: '3 Days',
          title: 'Flow Assurance and Hydraulic Analysis for gas condensate systems ',
          auth: 'Eng. Emad El-Gebesy',
          type: 'Process Course',
        },
        {
          images: 'https://i.postimg.cc/wjRSXF6v/course08.png',
          time: '2 Days',
          title: 'Compressor Start-up, shutdown and safety studies using HYSYS Dynamics',
          auth: 'Eng. Emad El-Gebesy',
          type: 'Process Course',
        },
        {
          images: 'https://i.postimg.cc/dtpfVd8K/course09.png',
          time: '3 Days',
          title: 'Optimize from wellhead to gas facilities using Aspen HYSYS',
          auth: 'Eng. Emad El-Gebesy',
          type: 'Process Course',
        },
        {
          images: 'https://i.postimg.cc/Y2XVTT00/course10.png',
          time: '1 Day',
          title: 'Safe Vessel Depressurization using BLOWDOWN',
          auth: 'Eng. Emad El-Gebesy',
          type: 'Process Course',
        },
        {
          images: 'https://i.postimg.cc/3xGc4RB0/course11.png',
          time: '3 Days',
          title: 'HYSYS VBA Integration for Optimization and What-If Studies ',
          auth: 'Eng. Emad El-Gebesy',
          type: 'Process Course',
        },
        {
          images: 'https://i.postimg.cc/xTc7QgNR/course12.png',
          time: '3 Days',
          title: 'Risk Assessment (Qualitative, Semi-qualitative and Quantitative assessments) ',
          auth: 'Eng. Emad El-Gebesy',
          type: 'HSE Course',
        },
        {
          images: 'https://i.postimg.cc/9fjNGh88/course13.png',
          time: '3 Days',
          title: 'LOPA and SIL Determination',
          auth: 'Eng. Emad El-Gebesy',
          type: 'HSE Course',
        },
        {
          images: 'https://i.postimg.cc/g0qtsT1Y/course14.png',
          time: '5 Days',
          title: 'Advanced: QRA',
          auth: 'Eng. Emad El-Gebesy',
          type: 'HSE Course',
        },
        {
          images: 'https://i.postimg.cc/Jnr62QWj/course15.png',
          time: '3 Days',
          title: 'Consequence Modeling Techniques',
          auth: 'Eng. Emad El-Gebesy',
          type: 'HSE Course',
        }
      ]
    }
  }


// Radio Filters

    radioChangeHandler = (event) => {
      this.setState({
        checked: event.target.value,
        filterFiled: event.target.value
      })


    }

  render(){
    const { filterFiled, searchFiled, Courses, checked } = this.state;
    const filterCourses = Courses.filter(Course =>
        Course.title.toLowerCase().includes(searchFiled.toLowerCase())
      );
    const radioCourses = filterCourses.filter(Radio =>
        Radio.type.toLowerCase().includes(filterFiled.toLowerCase())
      );

    return(
      <div>
        <Jumbotron jumboClass='training-slide' title='Training'/>
        <SectionWithBg ImageClass='whiteSection'>
          <ControlPanel
            searchBoxOnchange={e => this.setState({searchFiled: e.target.value})}
            radioChangeHandler={this.radioChangeHandler}
            allSelect={ checked === 'Course' }
            processSelect={ checked === 'Process' }
            hseSelect={ checked === 'HSE' }
          />
          <div className='courses-wrapper'>
            <TrainingtCard Courses={radioCourses}/>
          </div>
        </SectionWithBg>
      </div>
    )
  }
}
