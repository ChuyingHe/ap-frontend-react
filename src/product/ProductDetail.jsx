import React, { Component } from 'react';
import { Container, Row, Col, Image, Badge, Stack, Card } from 'react-bootstrap';

class ProductDetail extends Component {
    state = {  } 
    render() { 
        return (<>
        <Container>
            <Row>
                <Col>
                    <Image style={{ width: "100%" }} src='https://picsum.photos/200/300'>
                    </Image>
                </Col>
                <Col>
                    <Badge bg="dark" className='ap-margin-bottom'>Seife</Badge>
                    <h1>Kaffee seife</h1>

                    <div className='ap-margin-bottom'>This is the description of the soap. 
                        This is the description of the soap. 
                        This is the description of the soap. 
                        This is the description of the soap. This is the description of the soap. 
                        This is the description of the soap. 
                        This is the description of the soap. 
                        This is the description of the soap. </div>

                    {/* EFFECT */}
                    <Stack direction="horizontal" gap={3}>
                        <Badge bg="success">Pure skin</Badge>
                        <Badge bg="success">Deep Cleaning</Badge>
                        <Badge bg="success">Peeling</Badge>
                    </Stack>
                </Col>
            </Row>
            <Row>
                <Col>1 of 3</Col>
                <Col>2 of 3</Col>
                <Col>3 of 3</Col>
            </Row>
        </Container>
        </>);
    }
}
 
export default ProductDetail;