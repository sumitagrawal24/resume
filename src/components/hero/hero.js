import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
    <section id="hero" className="s-hero">
          <div className="s-hero__bg rellax" data-rellax-speed={-7} />
          <div className="row s-hero__content">
            <div className="column">
              <div className="s-hero__content-about">
                <h1>I'm Sumit Agrawal.</h1>
                <h3>
                  <span>Full Stack developer </span>,<br></br> <span>B.Tech, CSE graduate from KIIT Deemed To Be University. </span><br></br>
                 Let's <a className="smoothscroll" href="#about">start scrolling </a>and learn more <a className="smoothscroll" href="#about">about me</a>.
                </h3>
                <div className="s-hero__content-social">
                  <a href=" https://github.com/sumitagrawal24"><i className="fab fa-facebook-f" aria-hidden="true">GitHub</i></a>
                  <a href="https://www.linkedin.com/in/sumit-agrawal-25aa751a0/"><i className="fab fa-linkedin-in" aria-hidden="true">LinkedIn</i></a>
                  <a href="https://twitter.com/sumit_agrawal__"><i className="fab fa-twitter" aria-hidden="true">Twitter</i></a>
                  <a href="https://www.instagram.com/sumit.agrawal_/"><i className="fab fa-instagram" aria-hidden="true">Instagram</i></a>
                  <a href="https://www.facebook.com/sumit.agrawal.250445"><i className="fab fa-facebook-f" aria-hidden="true">Facebook</i></a>
                </div>
              </div> {/* end s-hero__content-about */}
            </div>
          </div> {/* s-hero__content */}
          <div className="s-hero__scroll">
            <a href="#about" className="s-hero__scroll-link smoothscroll">
              <span className="scroll-arrow">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" style={{fill: 'rgba(0, 0, 0, 1)', transform: '', msFilter: ''}}><path d="M18.707 12.707L17.293 11.293 13 15.586 13 6 11 6 11 15.586 6.707 11.293 5.293 12.707 12 19.414z" /></svg>
              </span>
              <span className="scroll-text">Scroll Down</span>
            </a>
          </div> {/* s-hero__scroll */}
        </section>
      </React.Fragment>
    );
  }
}
        