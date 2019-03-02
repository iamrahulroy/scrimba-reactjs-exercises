import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import ListGroup from 'react-bootstrap/ListGroup'
import Jumbotron from 'react-bootstrap/Jumbotron'


import logo from './logo.svg';
import './App.css';

// Scrimba exercises
import InlineStylesWithStyleProperty from './InlineStylesWithStyleProperty/InlineStylesWithStyleProperty';
import ContactCardExercise from './PropsInReact/ContactCardExercise';
import MappingComponentPractice from './MappingComponentPractice/MappingComponentPractice';

import TodoApp from "./TodoAppPhase3/TodoApp"
import ClassBasedComponents from "./ClassBasedComponentsPractice/ClassBasedComponents"
import StatePractice from './StatePractice/StatePractice'
import TodoAppPhase4 from './TodoAppPhase4/TodoApp'



class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Jumbotron>
            <Container>
              <Row>
                <Col>
                  <ListGroup>

                    <ListGroup.Item>
                      <Link to="/InlineStylesWithStyleProperty/">Inline Styles With Style Property</Link>
                    </ListGroup.Item>

                    <ListGroup.Item>
                      <Link to="/ContactCardExercise/">Props in React</Link>
                    </ListGroup.Item>

                    <ListGroup.Item>
                      <Link to="/MappingComponentPractice/">Mapping Components Practice</Link>
                    </ListGroup.Item>

                    <ListGroup.Item>
                      <Link to="/TodoAppPhase3/">Todo app phase 3</Link>
                    </ListGroup.Item>

                    <ListGroup.Item>
                      <Link to="/ClassBasedComponents/">Class-based Components Practice</Link>
                    </ListGroup.Item>

                    <ListGroup.Item>
                      <Link to="/StatePractice/">State Practice</Link>
                    </ListGroup.Item>

                    <ListGroup.Item>
                      <Link to="/TodoAppPhase4/">Todo App Phase 4 Practice</Link>
                    </ListGroup.Item>

                  </ListGroup>
                </Col>
              </Row>
            </Container>
          </Jumbotron>

          <Route path="/InlineStylesWithStyleProperty" component={InlineStylesWithStyleProperty} />
          <Route path="/ContactCardExercise" component={ContactCardExercise} />
          <Route path="/MappingComponentPractice" component={MappingComponentPractice} />
          <Route path="/TodoAppPhase3" component={TodoApp} />
          <Route path="/ClassBasedComponents" component={ClassBasedComponents} />
          <Route path="/StatePractice" component={StatePractice} />
          <Route path="/TodoAppPhase4" component={TodoAppPhase4} />
        </div>
      </Router>
    );
  }
}

export default App;
