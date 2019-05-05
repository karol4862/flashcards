import React from 'react';
import './styles/Flashcard.scss';

const Flashcard = (props) => {
    const {front, back, id} = props.flashcard;
    return ( 
        <div className="flashcardBox">
            <li className="flashcardText"> 
                <span>{front}</span> - <span>{back}</span> 
            </li> 
            <button onClick={ ()=> props.handleButtonRemove(id) }>Remove</button> 
        </div>
    );
}
 
export default Flashcard;