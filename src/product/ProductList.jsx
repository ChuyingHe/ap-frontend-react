import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductItem from './ProductItem';
import { Col, Container, Row } from 'react-bootstrap';

function ProductList() {
    const [products, setProducts] = useState({});

    useEffect(() => {
        // Update the products
        getProductList();
    }, []);

    async function getProductList() {
        try {
            // const res = await axios.get(process.env.REACT_APP_STRAPI_LOCAL +'/api/products?populate=media');
            // const res_data = await res.json()
            // setproducts(res_data['data']['data'])
            
            const productUrl = process.env.REACT_APP_STRAPI_LOCAL +'/api/products?populate=media'
            axios.get(productUrl).then((response) => {
                setProducts(response['data']['data'])
            })
            // console.log("res=", res['data']['data'])
            console.log("products=", products)
        } catch(error) {
            console.error("ERROR BY GETING PRODUCTS: ", error)
        }
    }
    
    return (
        <>
            <Container>
                <Row spacing={3}>
                    {
                        products.map((item, index) => {
                            return <Col lg={4} md={4} sm={4} xs={6}> <ProductItem product={item} /> </Col>
                        })
                    }
                </Row>
            </Container>
         </>
     );
}

export default ProductList;