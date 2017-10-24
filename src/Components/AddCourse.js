import React, { Component } from 'react';

let colors = ['#EFD4F7', '#8601AF', '#FB9902', '#66B032', '#342309', '#888177', '#E8E1EA'];

class AddCourse extends Component {
  constructor(){
    super();
    this.state = {
      newCourse:{}
    }
  }

  static defaultProps = {}
  handleSubmit(e){
    if(colors.length === 1) {
      alert("cannot add any more courses");
    }
    else if(this.refs.title.value === ''){
      alert("Name is required");
    } else {
      // new section ------
      let point = Math.floor((Math.random() * colors.length));
      let index = colors[point];

      colors.splice(point, 1);
    // new section ------
      this.setState({newCourse:{
        title: this.refs.title.value,
        color: index
      }}, function(){
        this.props.addCourse(this.state.newCourse);
      });
    }
    e.preventDefault();
    document.getElementsByClassName("course-input")[0].value=null;
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>
            Add a Course:
            <input className="course-input" type="text" ref="title"/>
          </label>
          <input type="submit" value="Submit" className="btn"/>
        </form>
      </div>
    );
  }
}

export default AddCourse;
