import React, { Component } from "react";
import { Button, Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter as Router } from 'react-router-dom';

class TopNavbar extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    <Router>
      <div>
        <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="/">HAYATUL</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="#features">Huduma</Nav.Link>
          <Nav.Link href="/blog">Blogu</Nav.Link>
          <Nav.Link href="/about">Kuhusu</Nav.Link>
          <Nav.Link href="/contact">Mawasiliano</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="/login"><Button variant="outline-light">Ingia</Button></Nav.Link>
        </Nav>
      </Navbar>

      </div>
    </Router>
    );
  }
}

export default TopNavbar;