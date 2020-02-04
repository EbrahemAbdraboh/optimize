import React from 'react'
import { Jumbotron } from '../common/jumbotron/Jumbotron';
import SectionWithBg from '../common/SectionWithBg/SectionWithBg';
import {ProjectCard} from './ProjectCard/ProjectCard';

export class Projects extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      Projects: [
        {
          images: 'https://i.postimg.cc/9MqxMZNF/project01.png',
          title: 'Offshore Pipeline to Onshore GOSP Plant',
          capacity: '20,000 bbl/d',
          phase: 'Greenfield',
          executionFeas: 'execution-green',
          executionFEED: 'execution-green',
          executionDet: 'execution-green',

        },
        {
          images:'https://i.postimg.cc/Gh9jhk80/project02.png',
          title: 'Offshore FMP (Field Modification Plan) and FDP (Field Developemnt Plan)',
          capacity: '300K bbl/d',
          phase: 'Brownfield',
          executionFeas: 'execution-green',
          executionFEED: 'execution-green',
          executionDet: 'execution-green',

        },
        {
          images:'https://i.postimg.cc/XNs8b2vc/project03.png',
          title: 'PHA and HAZOP Analysis for 3 processing offshore platform',
          capacity: '300K bbl/d',
          phase: 'Brownfield',
          executionFeas: 'execution-gray',
          executionFEED: 'execution-green',
          executionDet: 'execution-green',

        },
        {
          images:'https://i.postimg.cc/k5NQhsZS/project04.png',
          title: 'Strategic Gas Condensate Gas Plant Design',
          capacity: '120MMSCFD',
          phase: 'Greenfield',
          executionFeas: 'execution-green',
          executionFEED: 'execution-gray',
          executionDet: 'execution-gray',

        },
        {
          images:'https://i.postimg.cc/wTPQt7L1/project05.png',
          title: 'Gas Plant Relocation',
          capacity: '60 MMSCFD',
          phase: 'Brownfield',
          executionFeas: 'execution-green',
          executionFEED: 'execution-green',
          executionDet: 'execution-green',

        },
        {
          images:'https://i.postimg.cc/0Qcp9Q92/project06.png',
          title: 'Waste Heat Recovery Upgrade in LNG Plant',
          capacity: 'Two trains',
          phase: 'Brownfield',
          executionFeas: 'execution-gray',
          executionFEED: 'execution-green',
          executionDet: 'execution-green',

        },
        {
          images:'https://i.postimg.cc/fR9jYDfB/project07.png',
          title: 'MP Steam System Upgrade by adding HRSG',
          capacity: '150K tone of Steam',
          phase: 'Greenfield',
          executionFeas: 'execution-green',
          executionFEED: 'execution-green',
          executionDet: 'execution-gray',

        },
        {
          images:'https://i.postimg.cc/hvZb1GY3/project08.png',
          title: 'Pressure Surge and Piping Stress Analysis for Ethylene Glycol Train',
          capacity: 'Two Trains',
          phase: 'Brownfield',
          executionFeas: 'execution-gray',
          executionFEED: 'execution-green',
          executionDet: 'execution-green',

        },
        {
          images:'https://i.postimg.cc/K86fWR86/project09.png',
          title: 'Basic Engineering and OTS for Refinery Plant',
          capacity: '400K bb/d',
          phase: 'Brownfield',
          executionFeas: 'execution-green',
          executionFEED: 'execution-green',
          executionDet: 'execution-green',

        },
        {
          images:'https://i.postimg.cc/MTW7kR2F/project10.png',
          title: 'ALARP demosntration and QRA study for 33 process plaƞorms',
          capacity: '300K bbl/d',
          phase: 'Brownfield',
          executionFeas: 'execution-green',
          executionFEED: 'execution-green',
          executionDet: 'execution-green',

        },
        {
          images:'https://i.postimg.cc/KYh7Nw9F/project11.png',
          title: 'Advanced Dynamic and Fluid Computational Dynamic for converƟng three phase into two phase Separator',
          capacity: '21K bb/d',
          phase: 'Brownfield',
          executionFeas: 'execution-green',
          executionFEED: 'execution-gray',
          executionDet: 'execution-gray',

        }
      ]
    }
  }

  render(){
    return(
      <div>
        <Jumbotron jumboClass='projects-slide' title='Projects' text='OPTIMIZE team has participated in the following projects'/>
        <SectionWithBg ImageClass='whiteSection'>
          <div className='projects-wrapper'>
            <ProjectCard Projects={this.state.Projects}/>
          </div>
        </SectionWithBg>
      </div>
    )

  }
}
