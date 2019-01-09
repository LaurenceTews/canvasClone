import React, { Component } from 'react';
import '../App.css';
import Slider from './Slider';
import profile from '../assets/profile.png';
import book from '../assets/direc.png';
import people from '../assets/group.png';
import info from '../assets/information.png';
import coursesPop from '../assets/coursesPop.png';
import helpPop from '../assets/helpPop.png';
import groupsPop from '../assets/groupsPop.png';
import accountPop from '../assets/accountPop.png';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideState: '',
      open: false
    };
    this._menuToggle = this._menuToggle.bind(this);
    this.dirToggle = this.dirToggle.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.infoToggle = this.infoToggle.bind(this);
    this.groupsToggle = this.groupsToggle.bind(this);
  }

  _menuToggle(e) {
    e.stopPropagation();
    if(this.state.slideState === "profile" && this.state.open) {
      this.setState({
        slideState: this.state.slideState,
        open: false
      }, function() {
        this.toggleOverlay();
      })
    } else {
      this.setState({
        slideState: 'profile',
        open: true
      }, function() {
        this.toggleOverlay();
      });
    }
  }

  dirToggle() {
    if(this.state.slideState === "directory" && this.state.open) {
      this.setState({
        slideState: this.state.slideState,
        open: false
      }, function() {
        this.toggleOverlay();
      })
    } else {
      this.setState({
        slideState: 'directory',
        open: true
      }, function() {
        this.toggleOverlay();
      });
    }
  }

  infoToggle() {
    if(this.state.slideState === "info" && this.state.open) {
      this.setState({
        slideState: this.state.slideState,
        open: false
      }, function() {
        this.toggleOverlay();
      });
    } else {
      this.setState({
        slideState: 'info',
        open: true
      }, function() {
        this.toggleOverlay();
      });
    }
  }

  groupsToggle() {
    if(this.state.slideState === "groups" && this.state.open) {
      this.setState({
        slideState: this.state.slideState,
        open: false
      }, function() {
        this.toggleOverlay()
      });
    } else {
      this.setState({
        slideState: 'groups',
        open: true
      }, function() {
        this.toggleOverlay();
      });
    }
  }

  closeMenu() {
    this.setState({
      slideState: this.state.slideState,
      open: false
    }, function() {
      this.toggleOverlay();
    });
  }

  toggleOverlay() {
    let overlay = document.getElementsByClassName("overlay")[0];
    this.state.open ? overlay.style.visibility = "visible" : overlay.style.visibility = "hidden";
  }

  render () {
    let toDisplay = '';
    if(this.state.open) {
      toDisplay = <Slider onClose= {this.closeMenu } content={this.state.slideState} courseDir={this.props}/>;
    } else {
      toDisplay = <Slider collapsed={true} />
    }

    return(

        <div>
          { toDisplay }
          <ul className="nav-container">
            <a className="sidebar-icon" href="#"><li onClick={ this._menuToggle }><img  className='icon' src={profile} alt="profile"/></li>
              <img className="popup" src={accountPop} alt="account"/>
            </a>
            <a href="#"><li onClick={ this.dirToggle }><img className='icon' src={book} alt="book"/></li>
              <img className="popup" src={coursesPop} alt="courses"/>
            </a>
            <a href="#"><li onClick={ this.groupsToggle }><img className='icon' src={people} alt="people"/></li>
              <img className="popup" src={groupsPop} alt="groups"/>
            </a>
            <a href="#"><li onClick= {this.infoToggle }><img className='icon' src={info} alt="info"/></li>
              <img className="popup" src={helpPop} alt="help"/>
            </a>
          </ul>
        </div>
    )
  }
}

export default Navbar;
