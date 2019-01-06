import React, { Component } from 'react';

class Directory extends Component {

      render() {
            let courseItems;
            if(this.props.courseDir.courses[0]){
                  console.log(this.props.courseDir.courses[0].title);
                  courseItems = this.props.courseDir.courses.map(course => {
                  return (
                        <div className="item-blk">
                              <div>{course.title.toUpperCase()}</div>
                              <p>2017 SEMESTER TWO</p>
                       </div>
                  );
               });
            }
            return (
                  <div className="coursesDir">
                        <h3>Courses</h3>
                        <hr className="horizontal spaced" />
                        { courseItems }
                        <hr className="horizontal spaced" />
                        <p>All courses</p>
                        <p>Welcome to your courses! To customise the list of courses,
                        click on the "All Courses" link and select the courses to display
                        </p>
                  </div>

            );
      };
}


export default Directory;
