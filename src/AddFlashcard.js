import React, { Component } from 'react';
import './styles/AddFlashcard.scss';

class AddFlashcard extends Component {
    state = {
        front:'',
        back: ''
    }
    // dodac funcke do button i funckje na zmiane state z inputami
    render() {
        return ( 
            <div className="add">
                <label htmlFor="front">Front: <input type="text" name="front"/></label>
                <label htmlFor="back">Back: <input type="text" name="back"/></label>
                <button> Add </button>
            </div>
        );
    }
    
}
 
export default AddFlashcard;