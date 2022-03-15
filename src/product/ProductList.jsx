import React, { Component } from 'react';
import axios from 'axios';
import ProductItem from './ProductItem';
import { Col, Container, Row } from 'react-bootstrap';

class ProductList extends Component {
    state = { 
        products:[]  

    } 

    componentDidMount() {
        this.getProducts();
    }

    async getProducts() {
        const res = await axios.get('/api/products?populate=media');
        const products = await res;
        this.setState({products: products['data']['data']})
        console.log("ProductList = ", this.state.products)
    }

    render() {
        //TODO: how to loop through all so that they fit in gird view?
        return (<>
            <Container>
                <Row>
                    <Col>
                        {
                            this.state.products.map((item, index) => {
                                return <ProductItem product={item} />
                            })
                        }
                    </Col>
                </Row>
            </Container>
        </>);

        
    }
}
 
export default ProductList;