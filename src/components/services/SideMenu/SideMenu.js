import React from 'react';
import MetisMenu from 'react-metismenu';


import './SideMenu.scss';

const content=[
    {
        label: 'Engineering Services',
        to: '#eng',
        content: [
            {
                label: 'Machine Learning',
                to: '#eng-11',
            },
            {
                label: 'Process Modeling',
                to: '#eng-12',
                content: [
                    {
                        label: 'UPSTREAM WELLS AMNAGEMNT',
                        to: '#eng-121',
                    },
                    {
                        label: 'Pipelines',
                        to: '#eng-122',
                    },
                    {
                        label: 'Gas gathering',
                        to: '#eng-123',
                    },
                    {
                        label: 'Refinery Units',
                        to: '#eng-124',
                    },
                    {
                        label: 'Advanced Analysis Group',
                        to: '#eng-125',
                    },
                ],
            },
            {
                label: 'Mechanical Engineering',
                to: '#eng-13',
            },
            {
                label: 'Piping Engineering',
                to: '#eng-14',
            },
            {
                label: 'Civil and Structural',
                to: '#eng-15',
            },
            {
                label: 'Electrical Engineering',
                to: '#eng-16',
            },
            {
                label: 'Instrumentation',
                to: '#eng-17',
            },
            {
                label: 'FEED and Detailed',
                to: '#eng-18',
            },

        ],
    },
    {
        label: 'Process Safety & HSE',
        to: '#process',
    },
    {
        label: 'Project Management',
        to: '#project',
    },
    {
        label: 'Construction Supervision',
        to: '#construction',
    },
];

export const SideMenu = props => {
  return(
    <div className='side-menu-wrapper'>
      <MetisMenu content={content}  activeLinkFromLocation/>
    </div>
  );
};
