import React from 'react';
import {Button} from 'react-bootstrap';
import './MoreButton.scss';


export const MoreButton = (props) => (
    <div className='button-wrapper'>
      <Button href={props.page} variant="primary" size="lg" >More</Button>
    </div>
)
