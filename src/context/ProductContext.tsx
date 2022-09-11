import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// project import
import {
  API_URL_PRODUCTS,
  POPULATE,
  ProductAttributes,
  Products,
  ProductStrapi,
} from "../types/ProductsModel";

// ==============================|| COLUMN CHART ||============================== //

export const ProductContext = createContext<ProductAttributes>({
  name: "",
  product_id: 0,
  price: 0,
  color: "",
  size: "",
  smell: "",
  weight: 0,
  description: "",
  ingredients: [],
});

export function WithProductContext({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  const { id } = useParams();

  const [product, setProduct] = useState<ProductAttributes>({
    name: "",
    product_id: 0,
    price: 0,
    color: "",
    size: "",
    smell: "",
    weight: 0,
    description: "",
    ingredients: [],
  });

  // const [productComponent, setProductComponent] = useState<ProductComponent[]>([]);

  useEffect(() => {
    // Update the document title using the browser API
    fetchProduct();
  }, []);

  async function fetchProduct(): Promise<void> {
    try {
      const res = await axios.get(
        process.env.REACT_APP_STRAPI_LOCAL +
          "/api/products/" +
          id +
          `?populate=${POPULATE}`
      );

      console.log("res", res);
      setProduct({
        name: res.data.data.attributes.name,
        product_id: res.data.data.attributes.product_id,
        price: res.data.data.attributes.price,
        color: res.data.data.attributes.color || "",
        size: res.data.data.attributes.size || "",
        smell: res.data.data.attributes.smell || "",
        weight: res.data.data.attributes.weight,
        description: res.data.data.attributes.description,
        ingredients: res.data.data.attributes.ingredients || [],
        media: res.data.data.attributes.media,
      });

      // setProductComponent({
      //     productComponent: respData.data[0].attributes.productComponent
      // })
      // respData.data.map((t: Product) => {
      //   setProduct({
      //       name: t.attributes.name,
      //       productComponent: respData.data[0].attributes.productComponent
      //   })

      //  })
    } catch (error) {
      console.error(
        `Error fetching product data: ${(error as Error).message}`,
        error
      );
    }
  }

  return (
    <ProductContext.Provider
      value={{
        ...product,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
