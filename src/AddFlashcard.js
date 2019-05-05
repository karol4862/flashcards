import React, { Component } from 'react';
import './styles/AddFlashcard.scss';

class AddFlashcard extends Component {
    
    state = {
        front:'',
        back: ''
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    
    handleButton = () => {
        const item = {
            id: this.props.indexElement,
            front: this.state.front,
            back: this.state.back
        }
        this.props.handleButtonAdd(item);
        this.setState({
            front:'',
            back: ''
        })
        this.props.addToIndex()
    }
    render() {
        return ( 
            <div className="add">
                <label htmlFor="front">Front: <input type="text" name="front" onChange={this.handleChange} value={this.state.front}/></label>
                <label htmlFor="back">Back: <input type="text" name="back" onChange={this.handleChange} value={this.state.back}/></label>
                <button onClick  = {this.handleButton}> Add </button>
            </div>
        );
    }
    
}
 
export default AddFlashcard;