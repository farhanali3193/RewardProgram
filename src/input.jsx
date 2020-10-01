import React from 'react';
import data from './data';
import Points from './points';

class Input extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            data,
        }
    }

    handleChange = (e) => {
        this.setState({name: e.target.value})
    }

    filteredData = () => {
        const filteredArr = this.state.data.filter((item) => item.name === this.state.name)
        return filteredArr;
    }

    render(){
        return (
            <div>
                <label htmlFor='button'> Enter Customer Name: </label>
                <input name='button' type='text' onChange={this.handleChange}/>
                <Points name={this.state.name} filteredData = {this.filteredData()}/>  
            </div>
        )
    }
}

export default Input;