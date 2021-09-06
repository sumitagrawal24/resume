import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <header id="home" className="banner-text">
         <div className="row banner">
          
          <div>
            <br></br>
            <br></br>
            <br></br>
               <h1>I'm Sumit Agrawal.</h1>
               <h3>I'm a Full Stack Developer.</h3>
            </div>
          
          </div>
        </header>
      <header id="home" className="s-header">
     
        <div className="row s-header__nav-wrap">
          <nav className="s-header__nav">
            <ul>
              <li className="current"><a className="smoothscroll" href="#hero">Home</a></li>
              <li><a className="smoothscroll" href="#about">About</a></li>
              <li><a className="smoothscroll" href="#resume">Resume</a></li>
              <li><a className="smoothscroll" href="#portfolio">Works</a></li>
              <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
              <li><a className="smoothscroll" href="#contact">Contact Me</a></li>
            </ul>
          </nav>
        </div>
        <a className="s-header__menu-toggle" href="#0" title="Menu">
          <span className="s-header__menu-icon" />
        </a>
      
         
      </header>
      </React.Fragment>
    );
  }
}