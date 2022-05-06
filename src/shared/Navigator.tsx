import React, { Component } from 'react';
import {
  Navbar,
  Nav,
  Container,
  Form,
  FormControl,
  Button,
  Col,
  NavDropdown,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ReactComponent as Account } from '../asset/icons/account.svg';
import { ReactComponent as Favorite } from '../asset/icons/favorite.svg';
import { ReactComponent as ShoppingCart } from '../asset/icons/shopping_cart.svg';
import './_Navigator.scss';

class APNavigator extends Component {
  state = {};
  render() {
    return (
      <Navbar bg="light" expand="lg" className="font-josefin-medium">
        <Container className='flex-wrap-reverse'>
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 text-center"
              navbarScroll
            >
              <Nav.Link as={Link} to="/home">Home</Nav.Link>
              <Nav.Link as={Link} to="/products">Product</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
              {/* <Nav.Link as={Link} to="#" disabled>
                Link
              </Nav.Link> */}
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Nav>
          </Navbar.Collapse>

          <Navbar.Toggle aria-controls="navbarScroll" />

          <Navbar.Brand className="d-flex ms-auto reverse">
            {/* TODO: /account_id/profile/ */}
            <Nav.Link as={Link} to="/profile" className="btns-navigator">
              <Account />
            </Nav.Link>
            {/* TODO: /account_id/favorite/ */}
            <Nav.Link as={Link} to="/favorite" className="btns-navigator">
              <Favorite />
            </Nav.Link>
            {/* TODO: /account_id/shopping-cart/ */}
            <Nav.Link
              as={Link} to="/shopping-cart"
              className="btns-navigator"
            >
              <ShoppingCart />
            </Nav.Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    );
  }
}

export default APNavigator;
