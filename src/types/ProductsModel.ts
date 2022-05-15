export const API_URL = `${process.env.REACT_APP_STRAPI_LOCAL}/api/products`;
export const POPULATE = [
    '*',
    'productComponent.*',
    'productComponent.imgProduct.*'
];

export interface Product {
    data?: Array<{
        id?: number,
        attributes?:{
            name?: string;
            productComponent?: Array<ProductComponent>;
        }
    }>

}

export interface ProductComponent {
    id: number,
    titleProduct: string,
    subtitleProduct: string,
    description: string,
    weightProduct: number,
    priceProduct: number,
    productType: string,
    productSmell: string,
    productColor: string,
    imgProduct: {
        data: {
          id: number;
          attributes: { url: string, alternativeText: string };
        };
    }
}

export interface ProductStrapi {
    data: {
        data: Array<
        {
            id:2,
            attributes:{
                name: string,
                product_id: string,
                productComponent: Array<ProductComponent>
            }
        }
    >}
}