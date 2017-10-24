import React, { Component } from 'react';
import Profile from './Profile';
import Directory from './DirectoryItem';
import Info from './Info';
import Groups from './Groups';

class Slider extends Component {
	constructor(props) {
		super(props)
		this._menuToggle = this._menuToggle.bind(this);
	}	

	_menuToggle() {
		this.props.onClose();
	}

	render () {
		var panelState = "slidePanel";
		if(this.props.collapsed) {
			panelState = "slider-hidden";
		}
		let content = this.props.content;
		switch (content) {
			case "profile": content = <Profile />;
				break;
			case "directory": content = <Directory courseDir={this.props.courseDir}/>;
				break;
			case "info": content = <Info />;
				break;
			case "groups": content = <Groups />;
				break;
			default: content = '';
		}
		return (
				<div className={panelState}>
					<div className="close-button"><a href="#" onClick={ this._menuToggle }>X</a></div>
					{ content }
				</div>
			)
	};
}

export default Slider;