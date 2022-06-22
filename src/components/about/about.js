import React, { Component } from 'react';
export default class About extends Component {
  render() {
    return (
      <section id="about" className="s-about">
        <div className="row">
          <div>
            <h3>About Me</h3>
            <p>
            An enthusiastic fresher with highly motivated and leadership skills having bachelors of engineering degree in Computer Science and Engineering.
            </p>
            <hr />
            <div className="row s-about__content-bottom">
              <div className="column w-1000-stack">
                <h3>Contact Details</h3>
                <p>
                  Sumit Agrawal <br />
                  Durga Vastaraya, Simrahi Bazar <br />
                  Ward No: 05, Pin Code: 852111, Bihar, India <br />
                  <a href="tel:+917808787907">+91 7808787907 </a> <br />
                  <a href="mailto:sumit250445@gmail.com">sumit250445@gmail.com</a>
                </p>
              </div>
              <div className="column w-1000-stack">
                <a href="https://drive.google.com/file/d/1AnV1__BKmSxSWQxEzuFfDOwFJHKtcSWG/view?usp=sharing" className="btn btn--download" download="SumitAgrawalResume.pdf">
                 Download Resume
                </a>
              </div>
            </div>
          </div>
        </div> 
      </section>
     
    );
  }
}