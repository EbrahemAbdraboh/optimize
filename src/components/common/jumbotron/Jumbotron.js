import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
// import styled from 'styled-components';


import './jumbotron.scss';


export const Jumbotron = (props) => (
    <div className='jumbo-wrapper'>
      <Jumbo fluid className={props.jumboClass}>
        <Container>
          <h1>{props.title}</h1>
          <p>{props.text}</p>
        </Container>
      </Jumbo>
    </div>
)
