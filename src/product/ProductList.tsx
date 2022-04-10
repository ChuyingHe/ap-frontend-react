import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductItem from './ProductItem';
import { Col, Container, Row } from 'react-bootstrap';
import { Product } from '../types/ProductsModel';

function ProductList() {
const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
       
        const productUrl = process.env.REACT_APP_STRAPI_LOCAL +'/api/products?populate=media';

        axios.get(productUrl).then((response) => {
            console.log("", response);
            setProducts(response.data.data);
        });
        
    }, []);

    console.log("products=", products)
    
    return (
        <>
            <Container>
                <Row spacing={3}>
                    {
                        products && products.map((item, index) => {
                            return <Col lg={4} md={4} sm={4} xs={6}> <ProductItem product={item} /> </Col>
                        })
                    }
                </Row>
            </Container>
         </>
     );
}

export default ProductList;