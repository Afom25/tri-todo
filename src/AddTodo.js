import React, { Component } from 'react';


class AddTodo extends Component {
    state = {
        content:''
    }
    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            content:''
        })
    }
    
    render() { 
        return (  
            <div><br></br>
                <form onSubmit={this.handleSubmit}>
                    <label><h5> Add ውጥን መደብ:</h5></label>
                    <input type="text" onChange={this.handleChange} value={this.state.content}/>
                </form>
            </div>
        );
    }
}
 
export default AddTodo;