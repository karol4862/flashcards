import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.scss';
import Main from "./Main";

class App extends Component {
  state = {
    
  }
  render(){
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Main}/>
        </div>
      </Router>
    );
  }
}

export default App;


