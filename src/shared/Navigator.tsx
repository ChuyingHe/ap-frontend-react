import React, { Component } from 'react';
import {
  Navbar,
  Nav,
  Container,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap';
import { ReactComponent as Account } from '../asset/icons/account.svg';
import { ReactComponent as Favorite } from '../asset/icons/favorite.svg';
import { ReactComponent as ShoppingCart } from '../asset/icons/shopping_cart.svg';
import './_Navigator.scss';

class APNavigator extends Component {
  state = {};
  render() {
    return (
      <Navbar bg="light" expand="lg" className="font-josefin-medium">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/products">Product</Nav.Link>

              <Nav.Link href="/products/1">ProductDetail</Nav.Link>

              <Nav.Link href="/about">About</Nav.Link>

              <Nav.Link href="/contact">Contact</Nav.Link>

              {/* <Nav.Link href="#" disabled>
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
            <div className="d-flex">
              {/* TODO: /account_id/profile/ */}
              <Nav.Link href="/profile" className="btns-navigator">
                <Account />
              </Nav.Link>

              {/* TODO: /account_id/favorite/ */}
              <Nav.Link href="/favorite" className="btns-navigator">
                <Favorite />
              </Nav.Link>

              {/* TODO: /account_id/shopping-cart/ */}
              <Nav.Link
                href="/shopping-cart"
                className="btns-navigator"
              >
                <ShoppingCart />
              </Nav.Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default APNavigator;
