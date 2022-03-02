import React, { Component } from 'react';
import '../css/Navbar.css'
export default class Navbar extends Component {
  render() {
    return <div>
        <div className="wrapper">
    <nav>
      <input type="checkbox" id="show-search" />
      <input type="checkbox" id="show-menu" />
      <label htmlFor="show-menu" className="menu-icon"><i className="fas fa-bars"></i></label>
      <div className="content">
      
      {/* <div className="logo"><h2 className="animated infinite heartBeat"><a href="/">Suvidha</a></h2></div> */}
        <ul className="links">
          <li><a href=""> Suvidha</a></li>
          <li><a href="/">Home</a></li>
          <li><a href="/">About</a></li>
          <li><a href="/">Contact</a></li>
        </ul>
      </div>
      <label htmlFor="show-search" className="search-icon"><i className="fas fa-search"></i></label>
      <form action="#" className="search-box">
        <input type="text" placeholder="Type Something to Search..." required style={{zIndex:"100000",backgroundColor:"black"}} />
        <button type="submit" className="go-icon"><i className="fas fa-long-arrow-alt-right"></i></button>
      </form>
    </nav>
  </div>
    </div>;
  }
}
