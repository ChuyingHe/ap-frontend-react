import axios from "axios";
import { createContext, useEffect, useState } from "react";

// project import
import {
  API_URL_PRODUCTS,
  POPULATE,
  Products,
  ProductStrapi,
} from "../types/ProductsModel";

// ==============================|| COLUMN CHART ||============================== //

export const ProductContext = createContext<Products>({ data: [] });

export function WithProductContext({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  const [products, setProducts] = useState<Products>({ data: [] });
  // const [productComponent, setProductComponent] = useState<ProductComponent[]>([]);

  useEffect(() => {
    // Update the document title using the browser API
    fetchProduct();
  }, []);

  async function fetchProduct(): Promise<void> {
    try {
      const respData: ProductStrapi = await axios.get(
        `${API_URL_PRODUCTS}/?populate=${POPULATE}`
      );

      console.log(respData);
      if (!respData?.data) {
        return;
      }

      //      setProducts({ data: respData.data.data});

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
        ...products,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
