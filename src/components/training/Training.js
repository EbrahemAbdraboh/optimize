import React from 'react'
import { Jumbotron } from '../common/jumbotron/Jumbotron';
import { Layout } from '../common/Layout/Layout';
import SectionWithBg from '../common/SectionWithBg/SectionWithBg';
// import {TrainingtCard} from './TrainingtCard/TrainingtCard';
import { Row } from 'react-bootstrap';

export const Training = (props) => (
  <div>
    <Jumbotron jumboClass='training-slide' title='Training'/>
    <SectionWithBg ImageClass='whiteSection'>
      <Layout>
        <h2 style={{margin: '300px auto', textAlign: 'center'}}>Training Page</h2>
      </Layout>
    </SectionWithBg>
  </div>
)
