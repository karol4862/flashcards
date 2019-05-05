import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import './styles/LearnWords.scss';

class LearnWords extends Component {
    state = {
        indexElement: 0,
        activeElement: "",
        showSecond: false,
    }
    componentDidMount(){
        const activeElement = this.props.flashcards[this.state.indexElement];
        this.setState({  
            activeElement
        })
    }

    emptyArray = () => {
        alert(" First Create Flashcard ")
        return <Redirect to="/flashcards" />
    }

    handleButton = () => {
        if(this.state.showSecond){ 
            let indexElement = this.state.indexElement + 1;
            if(indexElement === this.props.flashcards.length) indexElement = 0;
            const activeElement = this.props.flashcards[indexElement];
            this.setState({
                indexElement,  
                activeElement,
                showSecond:false
            })
        }
        else {
            this.setState({
                showSecond: true
            })
        }
    }
    render() {
        const {activeElement, showSecond, indexElement} = this.state;
        const {flashcards} = this.props;
        const spanStyle = {
            fontSize: '10px',
            color: 'gray'
        };
        return (
            <div className="learn">
                {flashcards.length===0 ? this.emptyArray() : null }
                <span>{indexElement + 1} / {flashcards.length}</span>
                <section>{activeElement.front}</section>
                <section style={!showSecond ? spanStyle : null}>{showSecond ? activeElement.back : "* Click to show *"}</section>
                <button onClick = {this.handleButton}>{showSecond ? "Next" : "Show"}</button>
            </div>
        );
    }
}

export default LearnWords;
