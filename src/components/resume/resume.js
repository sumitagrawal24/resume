import React, { Component } from 'react';
export default class Resume extends Component {
  render() {
    return (
   
      <section id="resume" className="s-resume target-section">
        <div className="row s-resume__section">
          <div className="column large-3 tab-12">
            <h3 className="section-header-allcaps">Projects</h3>
          </div>
          <div className="column large-9 tab-12">
            <div className="resume-block">
              <div className="resume-block__header">
                <h4 className="h3">React/Java</h4>
                <p className="resume-block__header-meta">
                  <span>Minor Project, Full Stack Development</span> 
                  <span className="resume-block__header-date">
                    March 2021 - May 2021
                  </span>
                </p>
              </div>
              <p>
              FinTech B2B Invoice Management
              </p>
            </div>
            <div className="resume-block">
              <div className="resume-block__header">
                <h4 className="h3">Android Development</h4>
                <p className="resume-block__header-meta">
                  <span>Minor Project, Chatting/Messaging App, Online</span> 
                  <span className="resume-block__header-date">
                    May 2020 - July 2020
                  </span>
                </p>
              </div>
              <p>
                
              </p>
            </div>
            <div className="resume-block">
              <div className="resume-block__header">
                <h4 className="h3">Web Development</h4>
                <p className="resume-block__header-meta">
                  <span>Front End, Back-end Developer, Offline</span> 
                  <span className="resume-block__header-date">
                    May 2020 - July 2020
                  </span>
                </p>
              </div>
              <p>
              Group Project
              </p>
            </div>
            <div className="resume-block">
              <div className="resume-block__header">
                <h4 className="h3">Adhyayan</h4>
                <p className="resume-block__header-meta">
                  <span>Philanthropy,  Digital Marketing</span> 
                  <span className="resume-block__header-date">
                    Dec 2019 - Nov 2020
                  </span>
                </p>
              </div>
              <p>
                
              </p>
            </div>
          </div>
        </div> 
        <div className="row s-resume__section">
          <div className="column large-3 tab-12">
            <h3 className="section-header-allcaps">Education</h3>
          </div>
          <div className="column large-9 tab-12">
            <div className="resume-block">
              <div className="resume-block__header">
                <h4 className="h3">KIIT Deemed To Be University</h4>
                <p className="resume-block__header-meta">
                  <span>B.Tech in Computer Science and Engineering</span> 
                  <br></br>
                  <span>CGPA: 9.09</span>
                  <br></br>
                  <span className="resume-block__header-date">
                    July 2018 - June 2022
                  </span>
                </p>
              </div>
              <p>
              </p>
            </div>
            <div className="resume-block">
              <div className="resume-block__header">
              <h4 className="h3">Holy Garden Model School</h4>
                <p className="resume-block__header-meta">
                  <span>Intermediate AISSE Examination 2018</span> 
                  <br></br>
                  <span>CGPA: 9.2 || Percentage: 87.4</span>
                  <br></br>
                  <span className="resume-block__header-date">
                    July 2017 - June 2018
                  </span>
                </p>
              </div>
              <p>
              </p>
            </div> 
            <div className="resume-block">
              <div className="resume-block__header">
              <h4 className="h3">Patliputra Cental School</h4>
                <p className="resume-block__header-meta">
                  <span>Matriculation AISSE Examination 2016</span> 
                  <br></br>
                  <span>CGPA: 9.2 || Percentage: 87.4</span>
                  <br></br>
                  <span className="resume-block__header-date">
                    July 2015 - June 2016
                  </span>
                </p>
              </div>
              <p>
              </p>
            </div>
          </div>
        </div> {/* s-resume__section */}
        <div className="row s-resume__section">
          <div className="column large-3 tab-12">
            <h3 className="section-header-allcaps">Technical Skills</h3>
          </div>
          <div className="column large-9 tab-12">
            <div className="resume-block">
              <p>
              </p>
              <ul className="skill-bars-fat">
              <li>
                  <div className="progress percent85" />
                  <strong>Java</strong>
              </li>
              <li>
                  <div className="progress percent90" />
                  <strong>Python</strong>
              </li>
              <li>
                  <div className="progress percent75" />
                  <strong>ReactJS</strong>
              </li>
                <li>
                  <div className="progress percent85" />
                  <strong>HTML</strong>
                </li>
                <li>
                  <div className="progress percent85" />
                  <strong>CSS</strong>
                </li>
                <li>
                  <div className="progress percent65" />
                  <strong>Javascript</strong>
                </li>
                <li>
                  <div className="progress percent90" />
                  <strong>SQL</strong>
                </li>
                <li>
                  <div className="progress percent75" />
                  <strong>C</strong>
                </li>
                <li>
                  <div className="progress percent85" />
                  <strong>C++</strong>
                </li>
                <li>
                  <div className="progress percent85" />
                  <strong>Extjs</strong>
                </li>
                <li>
                  <div className="progress percent75" />
                  <strong>Data Structures</strong>
                </li>
              </ul>
            </div>
          </div>
          <div className="column large-3 tab-12">
            <h3 className="section-header-allcaps">Non-Technical Skills</h3>
          </div>
          <div className="column large-9 tab-12">
            <div className="resume-block">
              <p>
              </p>
              <ul className="skill-bars-fat">
              <li>
                  <div className="progress percent85" />
                  <strong>Leadership</strong>
              </li>
              <li>
                  <div className="progress percent90" />
                  <strong>Teaching</strong>
              </li>
              <li>
                  <div className="progress percent75" />
                  <strong>Management</strong>
              </li>
              <li>
                  <div className="progress percent75" />
                  <strong>Marketing</strong>
              </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
    );
  }
}
