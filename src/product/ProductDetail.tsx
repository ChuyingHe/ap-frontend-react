import React, {useState} from 'react';
import { Container, Row, Col, Image, Badge, Stack, Carousel, Button } from 'react-bootstrap';
import './_ProductDetail.scss'
import { useLocation } from 'react-router-dom';
import { Product } from '../types/ProductsModel';

export default function ProductDetail(){
    const location = useLocation();
    const [product, setProduct] = useState((location?.state as any)?.product as any);

    function componentDidMount() {
    }


    return (<>
    <Container>
        <Row>
            <Col>
                <Carousel>
                    {product?.attributes?.media?.data.map((item: any, index: number)=>{
                        return <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={process.env.REACT_APP_STRAPI_LOCAL+item?.attributes?.url}
                            alt="First slide"
                            />
                        </Carousel.Item>
                    })}
                    {/* <Carousel.Item>
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
                    </Carousel.Item> */}
                </Carousel>

            </Col>
            <Col>
                {/* TODO: width vw */}
                <div>
                    <Badge bg="dark" className='detail-mb'>Seife</Badge>
                    <h1>{product?.attributes?.name}</h1>

                    <div className='detail-mb'>{product?.attributes?.description} </div>

                    {/* EFFECT */}
                    <Stack className='detail-mb' direction="horizontal" gap={3}>
                        {product?.attributes?.ingredients.map((item: any, index: number) => {
                            return <Badge bg="success">{item}</Badge>
                        })}
                    </Stack>

                    {/* TODO: tsparticles: https://www.npmjs.com/package/react-tsparticles */}
                    <div className="d-grid gap-2">
                        <Button variant="secondary" size="lg">
                            In den Einkaufwagen
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