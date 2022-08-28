export const API_URL_CATEGORIE = `${process.env.REACT_APP_STRAPI_LOCAL}/api/categories`;
export const API_URL_PRODUCTS = `${process.env.REACT_APP_STRAPI_LOCAL}/api/products`;

export const POPULATE = [
    '*',
    'productComponent.*',
    'productComponent.imgProduct.*'
];

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
    id: number,
    titleProduct: string,
    subtitleProduct: string,
    description: string,
    weightProduct: number,
    priceProduct: number,
    productType: string,
    productSmell: string,
    productColor: string,
    imgProduct?: {
        data: {
          id: number;
          attributes: { url: string, alternativeText: string };
        };
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