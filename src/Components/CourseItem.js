import React, { Component } from 'react';
import '../App.css';
import alert from '../assets/alert.png';
import write from '../assets/write.png';
import folder from '../assets/folder.png';

class CourseItem extends Component {
  deleteCourse(title){
    this.props.onDelete(title);
  }

  render () {
    var courseStyle = {
      backgroundColor: this.props.course.color
    }
    return(
        <div className="course-container" >
          <div className="course-header" style = { courseStyle }>
            <a href="#" className="del-btn" onClick={this.deleteCourse.bind(this, this.props.course.title)}>X</a>
          </div>
          <div className="course-footer">
            <h4 className="courseTitle">{this.props.course.title}</h4>
            <p>2017 Semester Two</p>
            <img className='icon-small' src={alert} />
            <img className='icon-small' src={write} />
            <img className='icon-small' src={ folder }/>
          </div>
        </div>
    );
  }
}

export default CourseItem;
