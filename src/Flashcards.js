import React, { Component } from 'react';
import Flashcard from './Flashcard';
import AddFlashcard from './AddFlashcard';
import './styles/Flashcards.scss';

class Flashcards extends Component { 
    render() {
        const {flashcards} = this.props;
        const flashcardsList = flashcards.map(item => <Flashcard flashcards={flashcards}/>)
        return (
            <div className="flashcards">
                <AddFlashcard />
                <ul>
                    {flashcardsList}
                </ul>
            </div>
        );
    }
}

export default Flashcards;
