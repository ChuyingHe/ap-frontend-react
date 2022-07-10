import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

// project import
import { API_URL, POPULATE, Product, ProductStrapi } from '../types/ProductsModel';

// ==============================|| COLUMN CHART ||============================== //

export const ProductsContext = createContext<Product>({});


 export function WithProductsContext({ children } : {
   children: JSX.Element | JSX.Element[];
 }) {

  const [products, setProducts] = useState<Product>({});
  // const [productComponent, setProductComponent] = useState<ProductComponent[]>([]);


  useEffect(() => {
    // Update the document title using the browser API
    fetchProduct();
  }, []);


   async function fetchProduct(): Promise<void> {
     try {
       const respData: ProductStrapi = await axios.get(`${API_URL}/?populate=${POPULATE}`);     
      
      console.log(respData)
       if (!respData?.data) {
         return;
       }

       setProducts({ data: respData.data.data});

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
       console.error(`Error fetching product data: ${(error as Error).message}`, error);
     }
   }


  return (
   
    <ProductsContext.Provider
      value={{
        ...products
      }}
      >
      {children}
    </ProductsContext.Provider>
    
  );
};


