import React from 'react';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import './SideMenu.scss';


export const SideMenu = props => {
  return(
    <div className='side-menu-wrapper'>
      <SideNav
        expanded= {true}
        onSelect={(selected) => {
            // Add your code here
          }}
        >
        <SideNav.Toggle />
        <SideNav.Nav >
            <NavItem eventKey="eng" >
                <NavText>
                    Engineering Services
                </NavText>
                <NavItem eventKey="eng/step11" >
                    <NavText>
                        Machine Learning
                    </NavText>
                </NavItem>
                <NavItem eventKey="eng/step12" >
                    <NavText>
                        Process Modeling
                    </NavText>
                    <NavItem eventKey="eng/step12/step121" >
                        <NavText>
                            UPSTREAM WELLS AMNAGEMNT
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="eng/step12/step122" >
                        <NavText>
                            Pipelines
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="eng/step12/step123" >
                        <NavText>
                            Gas gathering
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="eng/step12/step124" >
                        <NavText>
                            Refinery Units
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="eng/step12/step125" >
                        <NavText>
                            Advanced Analysis Group
                        </NavText>
                    </NavItem>
                </NavItem>
                <NavItem eventKey="eng/step13" >
                    <NavText>
                        Mechanical Engineering
                    </NavText>
                </NavItem>
                <NavItem eventKey="eng/step14" >
                    <NavText>
                        Piping Engineering
                    </NavText>
                </NavItem>
                <NavItem eventKey="eng/step15" >
                    <NavText>
                        Civil and Structural
                    </NavText>
                </NavItem>
                <NavItem eventKey="eng/step16" >
                    <NavText>
                        Electrical Engineering
                    </NavText>
                </NavItem>
                <NavItem eventKey="eng/step17" >
                    <NavText>
                        Instrumentation
                    </NavText>
                </NavItem>
                <NavItem eventKey="eng/step18" >
                    <NavText>
                        FEED and Detailed
                    </NavText>
                </NavItem>
            </NavItem>
            <NavItem eventKey="Process">
                <NavText>
                    Process Safety & HSE
                </NavText>
            </NavItem>
            <NavItem eventKey="Project">
                <NavText>
                    Project Management
                </NavText>
            </NavItem>
            <NavItem eventKey="Construction">
                <NavText>
                    Construction Supervision
                </NavText>
            </NavItem>
        </SideNav.Nav>
      </SideNav>
    </div>
  );
};
