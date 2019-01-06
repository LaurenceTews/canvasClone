import React, { Component } from 'react';
import Select from 'react-select';

const colours = ['#EFD4F7', '#8601AF', '#FB9902', '#66B032', '#342309', '#888177', '#E8E1EA'];

let options =[
  {value: 'BUSINESS 101', label: 'BUSINESS 101'},
  {value: 'ARCHEOLOGY 302', label: 'ARCHEOLOGY 302'},
  {value: 'MATHS 107', label: 'MATHS 107'},
  {value: 'PHYSIOTHERAPY 131', label: 'PHYSIOTHERAPY 131'},
  {value: 'BIOMED 280', label: 'BIOMED 280'},
  {value: 'MAORI 340', label: 'MAORI 340'},
  {value: 'STATISTICS 281', label: 'STATISTICS 281'}
];

export default class AddCourse extends Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this)
    
    this.state = {
      newCourse:{},
      selectedOption: null,
    }
  }

  static defaultProps = {}

  handleSubmit(e){

    if(colours.length === 0 || options.length === 0) {
      alert("cannot add any more courses");
    }

    else {
      let point = Math.floor((Math.random() * colours.length));
      let index = colours[point];

      colours.splice(point, 1);
      this.setState({newCourse:{
        colour: index,
        title: this.state.selectedOption.value
      }}, function(){
        this.props.addCourse(this.state.newCourse);
      });
    }

    e.preventDefault();
    options = options.filter(options => options.value !== this.state.selectedOption.value);
    // this.resetState(); - wrap this in a promise
  }

  resetState() {
    this.setState({
      newCourse:{},
      selectedOption: null,
    })
  }

  handleChange = (selectedOption) => {
      this.setState({ 
        newCourse: this.state.newCourse,
        selectedOption: selectedOption
       });
  }

  render() {
    const { selectedOption } = this.state;
    return(
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>
            Add a Course:
            <Select
                value={selectedOption}
                onChange={this.handleChange}
                options={options}
                className="searchbar-std"
            />
          </label>
          <input type="submit" value="Submit" className="btn"/>
        </form>
      </div>
    );
  }
}
