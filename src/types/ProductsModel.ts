export const API_URL_CATEGORIE = `${process.env.REACT_APP_STRAPI_LOCAL}/api/categories`;
export const API_URL_PRODUCTS = `${process.env.REACT_APP_STRAPI_LOCAL}/api/products`;


export const POPULATE = [
    '*',
    "media",
    'productComponent.*',
    'productComponent.imgProduct.*'
].join('&');

export const POPULATE_MEDIA = [
    'products',
    "media"
].join('.');

export interface CategoryAttributes {
    categoryName?: string;
    UID?: string;
    products?: Products;
}

export interface CategoryDataSet {
    id: number;
    attributes: CategoryAttributes;
}

export interface Categorie {
    data: Array<CategoryDataSet>;
}

export interface ProductDataSet {
    id: number;
    attributes: ProductAttributes;
}

export interface Products {
    data: Array<ProductDataSet>;
}

export interface ProductAttributes {
    name: string,
    product_id: number,
    price: number,
    color: string,
    size: string,
    smell: string,
    weight: number,
    description?: string,
    ingredients: Array<string>, 
    media?:
    {
        data: Array<{
          id: number;
          attributes: { url: string, alternativeText: string };
        }>;
    }
}

export interface CategorieStrapi {
    data?: {
        data: Array<
        {
            id: number,
            attributes:{
                categoryName: string,
                UID: string,
                products: Products
            }
        }
    >}
}

export interface ProductStrapi {
    data: {
        data: Array<
        {
            id:2,
            attributes:{
                name: string,
                product_id: string,
                productComponent: Array<ProductAttributes>
            }
        }
    >}
}