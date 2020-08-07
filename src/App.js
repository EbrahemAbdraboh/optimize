import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { CustomPreloader } from 'react-preloaders';
import loader from './assets/loader.svg';
import Root from './Root';
import './App.scss';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className='main-container' >
          <Root />
          <CustomPreloader time={400}>
             <div className='loading'><img src={loader} alt='OPTIMIZE-Engineering-Loader'/></div>
           </CustomPreloader>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
