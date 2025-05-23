import React, { Component } from 'react';
import DownloadResume from '../components/DownloadResume';

export default class About extends Component {
  render() {
    return (
      <section id={this.props.id} className="section about-section">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="section-content">
            <p>
              I'm a passionate developer with experience in building web applications.
              My journey in tech started when...
            </p>
            <p>Detailed information about yourself...</p>
            <DownloadResume />
            {/* Add more content */}
          </div>
        </div>
      </section>
    );
  }
}