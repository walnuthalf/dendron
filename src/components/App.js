import React, { Component } from 'react';
import Login from "./Login"
import Chat from "./Chat"
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class App extends Component {
  render() {
    return (
      <Router>
        <Route
          exact
          path="/"
          render={() =>
            <Container>
              <Row style={{ minHeight: "10vh", height: "10vh" }}>
                <Navbar bg="light" expand="lg" fixed="top">
                  <Navbar.Brand href="#home">MADE IN BASEMENT</Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                </Navbar>
              </Row>
              {localStorage.getItem("auth-token") === null ? <Login /> : <Chat />}
            </Container>
          }
        />
      </Router>);
  }
}

export default App;
