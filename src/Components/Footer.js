import React, { Component } from 'react';
import '../App.css';
class Footer extends Component {
  render () {
    return(
      <div className="footer-container">
      <hr className="footer-hr"/>
        <ul>
          <li>Terms of Service</li>
          <li>|</li>
          <li>MyAucklandUni</li>
          <li>|</li>
          <li>Email Policy</li>
          <li>|</li>
          <li>ICT Acceptable Use Policy</li>
        </ul>
      </div>
    )
  }
}

export default Footer;
