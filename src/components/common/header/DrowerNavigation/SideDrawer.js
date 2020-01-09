import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import './SideDrawer.scss';
import logo from '../../../../assets/logo.png';



const SideDrawer = (props) => {
    let drawerClasses = 'side-drawer'
    if (props.show) {
      drawerClasses = 'side-drawer open'
    }
    return (
      <nav className={drawerClasses}>
        <div className='drawer-header'>
          <img src={logo} alt='OPTIMIZE_Logo' />
        </div>
        <ul>
          <li onClick={props.click}>
            <Link  to="/">Home</Link>
          </li>
          <li onClick={props.click}>
            <Link  to="/about" >About</Link>
          </li>
          <li onClick={props.click}>
            <Link to="/capabilities">Capapilities </Link>
          </li>
          <li onClick={props.click}>
            <Link to="/services">Services </Link>
          </li>
          <li onClick={props.click}>
            <Link to="/projects">Projects </Link>
          </li>
          <li onClick={props.click}>
            <Link to="/training">Training </Link>
          </li>
        </ul>
      </nav>
    )

}

SideDrawer.propTypes = {
    click: PropTypes.func.isRequired
};

export default SideDrawer;
