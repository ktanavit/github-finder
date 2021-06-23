//ถูกแปลงจาก class base component เป็น function base component

import React from 'react';
// import React, { Component } from 'react';
import PropTypes from 'prop-types'; // shortcut impt กด Enter
import { Link } from 'react-router-dom';

const Navbar = ({ icon, title }) => {
  // class Navbar extends Component {
  /* 
เป็นการทำแบบ class base component
  static defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github',
  };

  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  };
*/

  //   render() {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        {/* <i className={this.props.icon}></i> {this.props.title} */}
        {/* <i className={props.icon}></i> {props.title} */}
        <i className={icon}></i> {title}
      </h1>
      <ul>
        <li>
          <Link to='/'>Home</Link>
          {/* ที่ใช้ Link ไม่ใช้ a เพราะ state จะหาย */}
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </nav>
  );
  //   }
};

Navbar.defaultProps = {
  title: 'Github Finder',
  icon: 'fab fa-github',
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
