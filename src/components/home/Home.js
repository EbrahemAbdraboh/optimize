import React from 'react';
import Slider from './Slider/Slider';
import AboutSection from './AboutSection/AboutSection';
import CapabilitiesSection from './CapabilitiesSection/CapabilitiesSection';
import ServicesSection from './ServicesSection/ServicesSection';
import ProjectsSection from './ProjectsSection/ProjectsSection';
import TrainingSection from './TrainingSection/TrainingSection';
export const Home = (props) => (
  <div>
    <Slider />
    <AboutSection />
    <CapabilitiesSection />
    <ServicesSection />
    <ProjectsSection />
    <TrainingSection />
  </div>
)
