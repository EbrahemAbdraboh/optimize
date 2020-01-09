import React from 'react'
import { Layout } from '../common/Layout';
import { Jumbotron } from '../common/jumbotron/Jumbotron';

export const Services = (props) => (
  <div>
    <Jumbotron jumboClass='services-slide' title='Services'/>
    <Layout>
      <h2 style={{margin: '300px auto', textAlign: 'center'}}>Services Page</h2>
    </Layout>
  </div>
)
