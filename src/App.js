import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Courses from './Components/Courses';
import AddCourse from './Components/AddCourse';
import './App.css';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      courses: [
        { color: "#fff0ff", title: "Finance 261"},
        { color: "#f0ffff", title: "Comlaw 329"},
        { color: "#ffffcc", title: "Dance 101"}
        ],
      visible: false
  }
}

  handleAddCourse(course){
    let courses = this.state.courses;
    courses.push(course);
    this.setState({courses:courses});
  }

  handleDeleteCourse(title){
    let courses = this.state.courses;
    let index = courses.findIndex( x=> x.title === title);
    courses.splice(index, 1);
    this.setState({courses: courses});
  }

  render() {
    return (
      <div>
      <div className="overlay"></div>
      <div className="App">
          <Navbar courses={this.state.courses} />
            <div className="main-container">
              <h2>Dashboard</h2>
              <hr className="horizontal"/>
              <div className="course-picker">
                <AddCourse addCourse={this.handleAddCourse.bind(this)}/>
              </div>
              <hr className="horizontal"/>
              <div>
                  <Courses courses={this.state.courses} onDelete={this.handleDeleteCourse.bind(this)}/>
              </div>
            </div>
          <Footer />
      </div>
      </div>
    );
  }
}
 
