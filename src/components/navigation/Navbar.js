import React, { Component } from "react";
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
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
        <Navbar.Brand href="/">Tech Dome</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="#features">Services</Nav.Link>
          <Nav.Link href="#features">Developers</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button>
        </Form>
      </Navbar>

      </div>
    </Router>
    );
  }
}

export default TopNavbar;