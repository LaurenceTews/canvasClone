import React, { Component } from 'react';
import Select from 'react-select';

const options =[
    {value: 'BUSINESS 101', label: 'BUSINESS 101'},
    {value: 'ARCHEOLOGY 302', label: 'ARCHEOLOGY 302'},
    {value: 'MATHS 107', label: 'MATHS 107'},
    {value: 'PHYSIOTHERAPY 131', label: 'PHYSIOTHERAPY 131'},
    {value: 'BIOMED 280', label: 'BIOMED 280'},
    {value: 'MAORI 340', label: 'MAORI 340'},
    { value: 'STATISTICS 281', label: 'STATISTICS 281'}
];



class SearchBar extends Component {

    state = {
        selectedOption: null
    }

    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
    }


    render() {
        const { selectedOption } = this.state;

        return(
            <Select
                value={selectedOption}
                onChange={this.handleChange}
                options={options}
                className="searchbar-std"
            />
        );
    }
}

export default SearchBar;