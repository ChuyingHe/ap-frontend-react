import { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../context/ProductsContext";
import { ProductComponent } from "../types/ProductsModel";
import ProductItem from "./ProductItem";

function ProductList() {
  const products = useContext(ProductsContext);
  const params = useParams();
  const productComponent =
    products?.data?.[parseFloat(params!.id!) - 1].attributes?.productComponent;

  return (
    <Container className="pt-3">
      <Row className="g-3">
        {productComponent &&
          productComponent.map((item: ProductComponent, index) => {
            return (
              <Col className="d-grid" lg={3} md={4} sm={6} xs={12} key={index}>
                {" "}
                <ProductItem data={item} />{" "}
              </Col>
            );
          })}
      </Row>
    </Container>
  );
}

export default ProductList;
