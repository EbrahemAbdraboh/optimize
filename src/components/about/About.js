import React from 'react'
import { Jumbotron } from '../common/jumbotron/Jumbotron';
import ProfileSection from './ProfileSection/ProfileSection';
import VisionSection from './VisionSection/VisionSection';
import MissionSection from './MissionSection/MissionSection';


export const About = (props) => (
  <div>
    <Jumbotron jumboClass='about-slide' title="About"/>
    <ProfileSection />
    <VisionSection />
    <MissionSection />
  </div>
)
