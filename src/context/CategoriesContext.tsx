import axios from "axios";
import { createContext, useEffect, useState } from "react";

// project import
import {
  API_URL_CATEGORIE,
  POPULATE,
  Categorie,
  ProductStrapi,
  CategorieStrapi,
  Products,
  API_URL_PRODUCTS,
  ProductAttributes,
  ProductDataSet,
  POPULATE_MEDIA,
} from "../types/ProductsModel";

// ==============================|| COLUMN CHART ||============================== //

export const CategoriesContext = createContext<Categorie>({ data: [] });

export function WithCategoriesContext({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  const [categories, setCategories] = useState<Categorie>({ data: [] });

  useEffect(() => {
    // Update the document title using the browser API
    fetchProduct();
  }, []);

  async function fetchProduct(): Promise<void> {
    try {
      const respData: CategorieStrapi = await axios.get(
        `${API_URL_CATEGORIE}/?populate[0]=${POPULATE_MEDIA}`
      );

      if (!respData?.data?.data) {
        return;
      }

      setCategories({ data: respData.data.data });


    } catch (error) {
      console.error(
        `Error fetching product data: ${(error as Error).message}`,
        error
      );
    }
  }

  return (
    <CategoriesContext.Provider
      value={{
        ...categories,
      }}
    >
      {children}
    </CategoriesContext.Provider>
  );
}
