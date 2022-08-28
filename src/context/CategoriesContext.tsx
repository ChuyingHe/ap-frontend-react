import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

// project import
import { API_URL_CATEGORIE, POPULATE, Categorie, ProductStrapi, CategorieStrapi } from '../types/ProductsModel';

// ==============================|| COLUMN CHART ||============================== //

export const CategoriesContext = createContext<Categorie>({data: []});


 export function WithCategoriesContext({ children } : {
   children: JSX.Element | JSX.Element[];
 }) {

  const [categories, setCategories] = useState<Categorie>({data: []});
  // const [productComponent, setProductComponent] = useState<ProductComponent[]>([]);


  useEffect(() => {
    // Update the document title using the browser API
    fetchProduct();
  }, []);


   async function fetchProduct(): Promise<void> {
     try {
       const respData: CategorieStrapi = await axios.get(`${API_URL_CATEGORIE}/?populate=*`);     
      

       if (!respData?.data?.data) {
         return;
       }

       setCategories({data: respData.data.data} );
       /*setTimeout( ()  => {
        console.log('#1', respData.data, categories);
       }, 100);*/

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
   
    <CategoriesContext.Provider
      value={{
        ...categories
      }}
      >
      {children}
    </CategoriesContext.Provider>
    
  );
};


