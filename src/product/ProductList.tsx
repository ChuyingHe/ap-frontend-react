import { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { CategoriesContext } from "../context/CategoriesContext";
import { ProductDataSet } from "../types/ProductsModel";
import ProductItem from "./ProductItem";

function ProductList() {
  
  const category = useContext(CategoriesContext);

  const params = useParams();
  console.log("products", category, params);

  let products: Array<ProductDataSet> = [];

  if ( params && params.id ) {
    const productID = parseInt(params.id, 10);

    const productRef = category.data.find( o => o.id === productID );
    if ( productRef ) {
      products = productRef.attributes.products?.data || [];
    }
  }

  return (
    <Container className="pt-3">
      <Row className="g-3">
          {products.map((item, index) => {
            return (
              <Col className="d-grid" lg={3} md={4} sm={6} xs={12} key={index}>
                <ProductItem data={item.attributes} />
              </Col>
            );
           })} 
      </Row>
    </Container>
  );
}

export default ProductList;
