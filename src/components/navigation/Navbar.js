import React, { Component } from "react";
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { BrowserRouter as Router } from 'react-router-dom';

import { MDBIcon } from 'mdbreact';

class NavbarPage extends Component {
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
      <Navbar collapseOnSelect expand="lg" bg="info" variant="dark">
          <Navbar.Brand href="/">HAYATUL</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/services">Services</Nav.Link>
            <Nav.Link href="/blog">Blog</Nav.Link>
            <NavDropdown title="Education" id="basic-nav-dropdown">
              <NavDropdown.Item href="/education/nursery">Nursery</NavDropdown.Item>
              <NavDropdown.Item href="/education/primary">Primary</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Secondary</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/health/progress">Health</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
            <div>
            <a href="https://facebook.com/hayatulislamiya" target="_blank" rel="noopener noreferrer" className="fb-ic mr-3 black-text">
              <MDBIcon fab icon="facebook-f" />
            </a>
            <a href="https://twitter.com/hayatulislamiya" target="_blank" rel="noopener noreferrer" className="tw-ic mr-3 black-text">
              <MDBIcon fab icon="twitter" />
            </a>
            <a href="#!" className="li-ic mr-3 black-text">
              <MDBIcon fab icon="linkedin-in" />
            </a>
            <a href="https://instagram.com/hayatulislamiya" target="_blank" rel="noopener noreferrer" className="ins-ic mr-3 black-text">
              <MDBIcon fab icon="instagram" />
            </a>
            <a href="https://www.youtube.com/channel/UCgpGjY3Rd97l53n8r_sSwBQ" target="_blank" rel="noopener noreferrer" className="yt-ic mr-3 black-text">
              <MDBIcon fab icon="youtube" />
            </a>
            </div>
          </Navbar.Collapse>
        </Navbar>

      </div>
    </Router>
    );
  }
}

export default NavbarPage;