import React, { Component } from 'react';
import { BrowserRouter  as Router, Route, Switch } from 'react-router-dom';
import { Home } from './components/home/Home';
import { About } from './components/about/About';
import { Capabilities } from './components/capabilities/Capabilities';
import { Services } from './components/services/Services';
import { Projects } from './components/projects/Projects';
import { Training } from './components/training/Training';
import { NoMatch } from './NoMatch';
import ScrollButton from './components/common/ScrollButton/ScrollButton';
import { Header } from './components/common/header/Header';
import SideDrawer from './components/common/header/DrowerNavigation/SideDrawer';
import Backdrop from './components/common/header/Backdrop/Backdrop';
import { Footer } from './components/common/footer/Footer';


class Root extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      sideDrawerOpen: false,
    };
  }

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen }
    })
  };

  backdropClickHandler = () => {

    this.setState({ sideDrawerOpen: false })
    this.eventPrevent()
  };
  eventPrevent () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (

        <React.Fragment >
          <Router >
            <header>
              <Header drawerClickHandler={this.drawerToggleClickHandler} prevent={this.eventPrevent}/>
            </header>
            <SideDrawer show={this.state.sideDrawerOpen} click={this.backdropClickHandler} />
            {backdrop}
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/capabilities" component={Capabilities} />
              <Route path="/services" component={Services} />
              <Route path="/projects" component={Projects} />
              <Route path="/training" component={Training} />
              <Route component={NoMatch} />
            </Switch>
            <Footer prevent={this.eventPrevent}/>

          </Router >
          <ScrollButton />
        </React.Fragment>
      
    );
  }
}

export default Root;
