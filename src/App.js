import React, { Component } from 'react';
import Root from './Root';
import loader from './assets/loader.svg';
import './App.scss';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      loading: false,
    }
  }


  loadingHandle = () => {
    this.setState({ loading: true })
  }




  render() {
    return (

      <div className='main-container' >
        <Root onLoad={this.loadingHandle} />
        { this.state.loading ? <div className='loading'><img src={loader} alt='OPTIMIZE-Engineering-Loader'/></div> : null}
      </div>

    );
  }
}

export default App;
