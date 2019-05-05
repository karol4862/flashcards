import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import './styles/LearnWriting.scss';

class LearnWriting extends Component {
    state = {
        text: '',
        indexElement: 0,
        activeElement: '',
        isChecked : false,
        valueIsCorrect: false
    }

    handleChange = (e) => {
        this.setState({
            text: e.target.value
        })
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
        if(this.state.isChecked) {
            let indexElement = this.state.indexElement + 1;
            if(this.props.flashcards.length === indexElement) indexElement = 0 ;
            const activeElement = this.props.flashcards[indexElement];
            this.setState({  
                activeElement,
                indexElement,
                isChecked : false,
                valueIsCorrect: false,
                text: ''
            })
        }
        else{
            if(this.state.text.toLowerCase() === this.state.activeElement.back.toLowerCase()) {
                this.setState({
                    valueIsCorrect: true
                })
            }
            this.setState({
                isChecked: true
            })
        }
    }

    render() {
        const {activeElement, valueIsCorrect, isChecked} = this.state;
        let styleForInput =  null;
        if(valueIsCorrect) styleForInput = {border: "2px solid green"}
        else if(!valueIsCorrect) styleForInput = {border: "2px solid red"}
        else styleForInput = null;
        return (
            <div className="learnWriting">
                {this.props.flashcards.length===0 && this.emptyArray() }
                <section>{activeElement.front}</section>
                <section>{!valueIsCorrect && isChecked ?  activeElement.back.toUpperCase() : null} </section>
                <input type="text" placeholder="Answer" style = {isChecked ? styleForInput : null} value = {this.state.text} onChange= {this.handleChange}/>
                <button onClick = {this.handleButton}>{isChecked? "Next" : "Check"}</button>
            </div>
        );
    }
}

export default LearnWriting;
