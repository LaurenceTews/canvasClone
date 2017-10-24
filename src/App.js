import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Courses from './Components/Courses';
import AddCourse from './Components/AddCourse';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      courses: [
        { color: "#323299", title: "Finance 261"},
        { color: "#85ba84", title: "Comlaw 329"},
        { color: "#f4e730", title: "Dance 101"}
        ],
      visible: false
  }
}

  handleAddCourse(course){
    let courses = this.state.courses;
    courses.push(course);
    this.setState({courses:courses});
    console.log("course: " + this.state.courses.title);
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

export default App; 
