import { useContext } from 'react';
import {
  Button, Container, Dropdown, Form,
  FormControl, Nav, Navbar, NavDropdown
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ReactComponent as Account } from '../asset/icons/account.svg';
import { ReactComponent as Favorite } from '../asset/icons/favorite.svg';
import { ReactComponent as ShoppingCart } from '../asset/icons/shopping_cart.svg';
import { CategoriesContext } from '../context/CategoriesContext';
import { LoginContext } from '../context/LoginContext';
import { ProductsContext } from '../context/ProductsContext';
import { LoginStatus } from "../types/LoginModel";
import './_Navigator.scss';


const Navigation: React.FC<LoginStatus> = (props) => {
    const products = useContext(ProductsContext); 
    const categories = useContext(CategoriesContext); 
    const loginStatus = useContext(LoginContext);

    return (
      <Navbar bg="light" expand="lg" className="font-josefin-medium">
        <Container className='flex-wrap-reverse'>
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 text-center"
              navbarScroll
            >
              <Nav.Link className="btns-navigator" as={Link} to="/home">Home</Nav.Link>
              {/* <Nav.Link className="btns-navigator" as={Link} to="/products">Product</Nav.Link> */}
              <NavDropdown className="btns-navigator" title="Product" id="navbarScrollingDropdown">
                 {
                    categories && categories.data?.map((item, index) => {
                            return <NavDropdown.Item as={Link} to={`/categories/${item.id}`} key={index}>
                                {item.attributes?.categoryName}
                            </NavDropdown.Item>
                    })
                }
              </NavDropdown>
              <Nav.Link className="btns-navigator" as={Link} to="/about">About</Nav.Link>
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
                <Button variant='custom'>Search</Button>
              </Form>
            </Nav>
          </Navbar.Collapse>

          <Navbar.Toggle aria-controls="navbarScroll" />

          <Navbar.Brand className="d-flex ms-auto reverse">
          <Nav.Item>
            <Dropdown as={Nav.Item}>
              <Dropdown.Toggle as={Nav.Link}>
                <Account />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {loginStatus && loginStatus.loggedIn ? (
                  <Dropdown.Item> </Dropdown.Item>
                ) : (
                  <Dropdown.Item onClick={() => props.setLogin(true)}>
                    Login
                  </Dropdown.Item>
                )}

                <Dropdown.Divider />
                <Dropdown.Item>
                  <Link to="/profile">Profile</Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to="/profile">Previous orders</Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link as={Link} to="/favorite" className="btns-navigator">
              <Favorite />
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link as={Link} to="/shopping-cart" className="btns-navigator">
              <ShoppingCart />
            </Nav.Link>
          </Nav.Item>
        </Navbar.Brand>
        </Container>
      </Navbar>
    );
}

export default Navigation;

