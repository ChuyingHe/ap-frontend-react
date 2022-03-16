import React, { Component } from 'react';
import { Container, Row, Col, Image, Badge, Stack, Carousel, Button } from 'react-bootstrap';
import './_ProductDetail.scss'

class ProductDetail extends Component {
    state = {}

    render() { 
        return (<>
        <Container>
            <Row>
                <Col>
                    <Carousel>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="https://picsum.photos/300/300"
                            alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="https://picsum.photos/300/300"
                            alt="Second slide"
                            />
                        </Carousel.Item>
                    </Carousel>

                </Col>
                <Col>
                    {/* TODO: width vw */}
                    <div>
                        <Badge bg="dark" className='detail-mb'>Seife</Badge>
                        <h1>Kaffee seife</h1>

                        <div className='detail-mb'>This is the description of the soap. 
                            This is the description of the soap. 
                            This is the description of the soap. 
                            This is the description of the soap. This is the description of the soap. 
                            This is the description of the soap. 
                            This is the description of the soap. 
                            This is the description of the soap. </div>

                        {/* EFFECT */}
                        <Stack className='detail-mb' direction="horizontal" gap={3}>
                            <Badge bg="success">Pure skin</Badge>
                            <Badge bg="success">Deep Cleaning</Badge>
                            <Badge bg="success">Peeling</Badge>
                        </Stack>

                        {/* TODO: tsparticles: https://www.npmjs.com/package/react-tsparticles */}
                        <div className="d-grid gap-2">
                            <Button variant="secondary" size="lg">
                                Legen in Einkaufwagen
                            </Button>
                        </div>
                    </div>

                </Col>
            </Row>

            <Row>
                <Col>
                    <div className='detail-mb'>This is the description of the soap. 
                            This is the description of the soap. 
                            This is the description of the soap. 
                            This is the description of the soap. This is the description of the soap. 
                            This is the description of the soap. 
                            This is the description of the soap. 
                            This is the description of the soap.This is the description of the soap. 
                            This is the description of the soap. 
                            This is the description of the soap. This is the description of the soap. 
                            This is the description of the soap. 
                            This is the description of the soap. 
                            This is the description of the soap.This is the description of the soap. 
                            This is the description of the soap. 
                            This is the description of the soap. This is the description of the soap. 
                            This is the description of the soap. 
                            This is the description of the soap. 
                            This is the description of the soap. </div>

                </Col>
            </Row>
        </Container>
        </>);
    }
}
 
export default ProductDetail;