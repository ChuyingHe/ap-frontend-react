import React, { Component } from 'react';
import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';

class APNavigator extends Component {
  state = {};
  render() {
    return (
      <Navbar style={{ marginBottom: "20px" }} bg="light" expand="lg">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/products">
                Product
              </Nav.Link>

              <Nav.Link href="/productdetail">
                ProductDetail
              </Nav.Link>

              <Nav.Link href="/about">
                About
              </Nav.Link>

              <Nav.Link href="/contact">
                Contact
              </Nav.Link>

              {/* <Nav.Link href="#" disabled>
                Link
              </Nav.Link> */}
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default APNavigator;
