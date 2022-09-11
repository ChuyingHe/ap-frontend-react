import React, { useContext, useState } from "react";
import {
  Container,
  Row,
  Col,
  Image,
  Badge,
  Stack,
  Carousel,
  Button,
} from "react-bootstrap";
import "./_ProductDetail.scss";
import { useLocation } from "react-router-dom";
import { ProductAttributes, Products } from "../types/ProductsModel";
import { ProductContext } from "../context/ProductContext";

export default function ProductDetail() {
  const currentProduct: ProductAttributes = useContext(ProductContext);
  console.log("currentProduct", currentProduct);

  const location = useLocation();

  // const currentProduct: ProductAttributes = useContext(ProductContext);

  function componentDidMount() {}

  return (
    <Container className="pt-3">
      <Row>
        <Col>
          <Carousel>
            {currentProduct.media?.data.map((item: any, index: number) => {
              return (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100"
                    src={
                      process.env.REACT_APP_STRAPI_LOCAL + item?.attributes?.url
                    }
                    alt="First slide"
                  />
                </Carousel.Item>
              );
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
            <Badge bg="dark" className="detail-mb">
              Seife
            </Badge>
            <h1>{currentProduct?.name}</h1>

            <div className="detail-mb">{currentProduct?.description} </div>

            {/* EFFECT */}
            <Stack className="detail-mb" direction="horizontal" gap={3}>
              {currentProduct?.ingredients.map((item: any, index: number) => {
                return <Badge bg="success">{item}</Badge>;
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
          <div className="detail-mb">{currentProduct?.description}</div>
        </Col>
      </Row>
    </Container>
  );
}
