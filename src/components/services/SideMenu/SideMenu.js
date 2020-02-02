import React from 'react';
import MetisMenu from 'react-metismenu';


import './SideMenu.scss';

const content=[
    {
        label: 'Engineering Services',
        to: '#a-link',
        content: [
            {
                label: 'Machine Learning',
                to: '#another-1',
            },
            {
                label: 'Process Modeling',
                to: '#another-2k',
                content: [
                    {
                        label: 'UPSTREAM WELLS AMNAGEMNT',
                        to: '#another-1',
                    },
                    {
                        label: 'Pipelines',
                        to: '#another-2k',
                    },
                    {
                        label: 'Gas gathering',
                        to: '#another-2k',
                    },
                    {
                        label: 'Refinery Units',
                        to: '#another-2k',
                    },
                    {
                        label: 'Advanced Analysis Group',
                        to: '#another-2k',
                    },
                ],
            },
            {
                label: 'Mechanical Engineering',
                to: '#another-2k',
            },
            {
                label: 'Piping Engineering',
                to: '#another-2k',
            },
            {
                label: 'Civil and Structural',
                to: '#another-2k',
            },
            {
                label: 'Electrical Engineering',
                to: '#another-2k',
            },
            {
                label: 'Instrumentation',
                to: '#another-2k',
            },
            {
                label: 'FEED and Detailed',
                to: '#another-2k',
            },

        ],
    },
    {
        label: 'rocess Safety & HSE',
        to: '#a-link3',
    },
    {
        label: 'Project Management',
        to: '#a-link4',
    },
    {
        label: 'Construction Supervision',
        to: '#a-link5',
    },
];

export const SideMenu = props => {
  return(
    <div className='side-menu-wrapper'>
      <MetisMenu content={content}  />
    </div>
  );
};
