import React, { Component } from 'react';
import '../App.css';
import Courses from './Courses';


class CourseDir extends Component {
	render() {
	    let courseItems;
	    if(this.props.courses){
	     	courseItems = this.props.courses.map(course => {
	        	return (
	          		<p> {course.title }</p>
	        	);
	      	});
	    }
	   	return(
	        <div class="course-dir">
	        	{ courseItems }
	        </div>
	    );
	}
}

export default CourseDir;
