import React, { Component } from 'react';
import CourseItem from './CourseItem';


class Courses extends Component {
  deleteCourse(title) {
    this.props.onDelete(title);
  }
  render() {
    let courseItems;
    if(this.props.courses){
      courseItems = this.props.courses.map(course => {
        return (
          <CourseItem onDelete={this.deleteCourse.bind(this)} key={course.title} course={course} />
        );
      });
    }
    return (
      <div>
      <h3>My Courses</h3>
      { courseItems }
      </div>
    );
  }
}

export default Courses;
