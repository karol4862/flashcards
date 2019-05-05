import React, { Component } from 'react';
import Flashcard from './Flashcard';
import AddFlashcard from './AddFlashcard';
import './styles/Flashcards.scss';

class Flashcards extends Component { 
    render() {
        const {flashcards, handleButtonAdd, handleButtonRemove, addToIndex, indexElement} = this.props;
        const flashcardsList = flashcards.map(item => <Flashcard key = {item.id} flashcard={item} handleButtonRemove={handleButtonRemove}/>)
        return (
            <div className="flashcards">
                <AddFlashcard 
                    handleButtonAdd = {handleButtonAdd}
                    addToIndex = {addToIndex}
                    indexElement = {indexElement}/>
                <ul>
                    {flashcardsList}
                </ul>
            </div>
        );
    }
}

export default Flashcards;
