import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap'
import DrowerToggleButton from './DrowerNavigation/DrowerToggleButton';
import logo from '../../../assets/logo.png';
import './header.scss';

/**
 * This utility function allows function calls to be debounced.
 * @param {Function} func Function that requires debouncing
 * @param {Number} wait Wait time in milliseconds between successive invocations
 */

const debounce = (func, wait) => {
  let timeout
  return (...args) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func.apply(this, args), wait)
  }
}
export class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      scrollPositionY: 0,
    }
  }

  componentDidMount() {

    return window.addEventListener('scroll', debounce(this.handleScroll, 20));
  }
  componentWillUnmount() {
    return window.removeEventListener('scroll', debounce(this.handleScroll, 20))
  }

  handleScroll = () => {
    // + is unary operator, same as Number(scrollPositionY)
    const scrollPositionY = +window.scrollY
    return this.setState({ scrollPositionY })
  }
    render(){
      const isScrolling = this.state.scrollPositionY
      return(
        <div className='header'>
          <div className={(isScrolling) ? 'customHeader-container header-shrink isScrolling' : 'customHeader-container header-wrapper'}>
            <Container isscrolling={isScrolling}>
              <nav className="toolbar__navigation">
                <div className="toolbar__logo">
                  <Link to={process.env.PUBLIC_URL + "/"} onClick={this.props.prevent}>
                    <img src={logo} alt='Optimize-engineering'/>
                  </Link>
                </div>
                <div className="spacer" />
                <div className="toolbar_navigation-items">
                  <ul>
                    <li>
                      <Link  to={process.env.PUBLIC_URL + "/"} onClick={this.props.prevent}>Home</Link>
                    </li>
                    <li>
                      <Link  to={process.env.PUBLIC_URL + "/about"} onClick={this.props.prevent}>About</Link>
                    </li>
                    <li>
                      <Link to={process.env.PUBLIC_URL + "/capabilities"} onClick={this.props.prevent}>Capabilities </Link>
                    </li>
                    <li>
                      <Link to={process.env.PUBLIC_URL + "/services"} onClick={this.props.prevent}>Services </Link>
                    </li>
                    <li>
                      <Link to={process.env.PUBLIC_URL + "/projects"} onClick={this.props.prevent}>Projects </Link>
                    </li>
                    <li>
                      <Link to={process.env.PUBLIC_URL + "/training"} onClick={this.props.prevent}>Training </Link>
                    </li>
                  </ul>
                </div>
                <div className="toolbar__toggle-button">
                    <DrowerToggleButton click={this.props.drawerClickHandler} />
                </div>
              </nav>
            </Container>
          </div>
        </div>

      )
    }
};
Header.propTypes = {
  drawerClickHandler: PropTypes.func.isRequired
};
