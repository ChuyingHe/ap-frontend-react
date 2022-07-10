import axios from "axios";
import { MouseEvent, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ProductComponent } from "../types/ProductsModel";
import "./_ProductDetail.scss";

export interface ProductComponentProps {
  data?: ProductComponent;
}

export default function ProductItem({ data }: ProductComponentProps) {
  // state = { firstPictureUrl: "" }
  const [firstUrl, setFristUrl] = useState<string>("");
  let navigate = useNavigate();
  const Markdown = require("react-remarkable");
  let img;
  let alt;
  if (data?.imgProduct.data) {
    img = `${process.env.REACT_APP_STRAPI_LOCAL}${data?.imgProduct.data.attributes.url}`;
    alt = `${process.env.REACT_APP_STRAPI_LOCAL}${data?.imgProduct.data.attributes.alternativeText}`;
  } else {
    // TODO add Dummy img
    img = ``;
    alt = ``;
  }

  // todo fix setFirstUrl
  async function getProductDetail(event: MouseEvent, id: number) {
    try {
      const res = await axios.get(
        process.env.REACT_APP_STRAPI_LOCAL +
          "/api/products/" +
          id +
          "?populate=media"
      );
      const productData: any = await res.data.data;

      //setFristUrl(process.env.REACT_APP_STRAPI_LOCAL + data?.imgProduct.data.attributes.url)

      console.log("productData", productData);
      navigate("../products/" + id, { state: { product: productData } });
    } catch {
      console.log("ERROR");
    }
  }

  return (
    <Card
      className="custom-prime"
      onClick={(e) => {
        getProductDetail(e, data!.id);
      }}
    >
      <Card.Img variant="top" src={img} alt={alt} />
      <Card.Body className="d-flex justify-content-between flex-column">
        <Card.Title>{data?.titleProduct}</Card.Title>

        <Markdown component={"span"} source={data?.description} />

        <Button variant="custom-prime">read more...</Button>
      </Card.Body>
    </Card>
  );
}
