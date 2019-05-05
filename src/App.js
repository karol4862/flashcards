import React, { Component } from 'react';
import { HashRouter as Router, Route} from 'react-router-dom';
import './App.scss';
import Main from "./Main";
import Flashcards from "./Flashcards";
import LearnWords from './LearnWords';
import LearnWriting from './LearnWriting';

class App extends Component {

  state = {
    flashcards: []
  }

  indexElement = 0;

  handleButtonAdd = (item) => {
    const flashcards = [...this.state.flashcards].concat(item);
    this.setState({flashcards})
  }
  handleButtonRemove = (id) => {
    const flashcards = [...this.state.flashcards].filter(item => item.id !== id);
    this.setState({flashcards})
  }
  addToIndex = () => {
    this.indexElement++;  
  }
  render(){
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Main}/>
          <Route 
            path="/flashcards" 
            render={()=><Flashcards 
              flashcards={this.state.flashcards} 
              handleButtonAdd={this.handleButtonAdd}
              handleButtonRemove = {this.handleButtonRemove}
              addToIndex = {this.addToIndex}
              indexElement = {this.indexElement}/>}/>
          <Route 
            path="/learnWords" 
            render={()=> <LearnWords flashcards={this.state.flashcards}/>}/>
          <Route path="/learnWriting" render={()=> <LearnWriting flashcards={this.state.flashcards}/>}/>
        </div>
      </Router>
    );
  }
}

export default App;


