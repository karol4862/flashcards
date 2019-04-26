import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.scss';
import Main from "./Main";
import Flashcards from "./Flashcards";

class App extends Component {
  state = {
    flashcards: []
  }
  render(){
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Main}/>
          <Route path="/flashcards" render={()=><Flashcards flashcards={this.state.flashcards}/>}/>
        </div>
      </Router>
    );
  }
}

export default App;


