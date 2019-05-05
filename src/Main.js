import React from 'react';
import {NavLink} from 'react-router-dom';

const Main = () => {
    return ( 
        <div className="menu">
            <NavLink to="flashcards"><div  > Your flashcards</div></NavLink> 
            <NavLink to="learnWords"><div > Learn by flashcards</div></NavLink>
            <NavLink to="learnWriting"><div> Learn by writting</div></NavLink>
        </div>
        
    );
}
 
export default Main;