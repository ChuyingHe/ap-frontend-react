import axios from "axios";
import { MouseEvent, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { POPULATE, ProductAttributes } from "../types/ProductsModel";
import "./_ProductDetail.scss";

export interface ProductComponentProps {
  data: ProductAttributes;
  id: number;
}

export default function ProductItem({ data, id }: ProductComponentProps) {
  const [firstUrl, setFristUrl] = useState<string>("");

  let navigate = useNavigate();
  const Markdown = require("react-remarkable");
  let img;
  let alt;

  if (data.media) {
    img = `${process.env.REACT_APP_STRAPI_LOCAL}${data.media.data[0].attributes.url}`;
    alt = `${process.env.REACT_APP_STRAPI_LOCAL}${data.media.data[0].attributes.alternativeText}`;
  } else {
    // TODO add Dummy img
    img = ``;
    alt = ``;
  }

  // todo fix setFirstUrl
  async function toProductDetail(event: MouseEvent, id: number) {
    try {
      console.log("1");
      const res = await axios.get(
        process.env.REACT_APP_STRAPI_LOCAL +
          "/api/products/" +
          id +
          `?populate=${POPULATE}`
      );
      console.log("response = ", res.data.data);

      const productData: any = await res.data.data;

      navigate(`../products/${id}?populate=${POPULATE}`);
    } catch {
      console.log("ERROR");
    }
  }

  return (
    <Card
      className="custom-prime"
      onClick={(e) => {
        toProductDetail(e, id);
      }}
    >
      <Card.Img variant="top" src={img} alt={alt} />
      <Card.Body className="d-flex justify-content-between flex-column">
        <Card.Title>{data?.name}</Card.Title>

        <Markdown component={"span"} source={data.description} />

        <Button variant="custom-prime">read more...</Button>
      </Card.Body>
    </Card>
  );
}
