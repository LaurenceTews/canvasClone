import React, { Component } from 'react';
import book from '../assets/direc.png';


class Directory extends Component {
	constructor(props) {
		super(props)
		this.dirClick = this.dirClick.bind(this);
	}

	dirClick(e) {
		this.props.onDirClick();
	}
	render (){
		return (
				 <li onClick={this.dirClick}>
				 	<img className='icon' src={book} alt="book"/>
				 </li>
			)
	};
}

export default Directory;