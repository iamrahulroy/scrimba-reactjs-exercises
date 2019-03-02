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
import InlineStylesWithStyleProperty from './InlineStylesWithStyleProperty';

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
                      <Link to="/InlineStylesWithStyleProperty/">InlineStylesWithStyleProperty</Link>
                    </ListGroup.Item>

                  </ListGroup>
                </Col>
              </Row>
            </Container>
          </Jumbotron>

          <Route path="/InlineStylesWithStyleProperty" component={InlineStylesWithStyleProperty} />
        </div>
      </Router>
    );
  }
}

export default App;
