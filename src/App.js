import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

// Scrimba exercises
import InlineStylesWithStyleProperty from './InlineStylesWithStyleProperty'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Link to="/InlineStylesWithStyleProperty/">InlineStylesWithStyleProperty</Link>
          <Route path="/InlineStylesWithStyleProperty" exact component={InlineStylesWithStyleProperty} />
        </div>
      </Router>
    );
  }
}

export default App;
