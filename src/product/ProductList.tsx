import { useContext } from 'react';
import ProductItem from './ProductItem';
import { Col, Container, Row } from 'react-bootstrap';
import { ProductComponent } from '../types/ProductsModel';
import { ProductsContext } from '../context/ProductsContext';
import { useLocation } from 'react-router-dom';

function ProductList() {

    const products = useContext(ProductsContext); 
    const location = useLocation();
    const idPage = location.pathname.split('/').pop();
    const productComponent = products?.data?.[parseFloat(idPage!)].attributes?.productComponent;

    console.log("location.pathname", productComponent);

        
    return (
        <Container className="pt-3">
              <Row className="g-3"  >
                {
                    productComponent && productComponent.map((item: ProductComponent) => {
                        return <Col className="d-grid" lg={3} md={4} sm={6} xs={12} key={item.id}> <ProductItem data={item} /> </Col>
                    })
                }
            </Row>
        </Container>
     );
}

export default ProductList;