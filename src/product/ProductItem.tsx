import axios from 'axios';
import { MouseEvent, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { ProductComponent } from '../types/ProductsModel';
import './_ProductDetail.scss';

export interface ProductComponentProps {
    data?: ProductComponent;
}

export default function ProductItem({data}: ProductComponentProps){
    // state = { firstPictureUrl: "" } 
     const [firstUrl, setFristUrl] = useState<string>('')
     let navigate = useNavigate(); 
     const Markdown = require('react-remarkable');
    // todo fix setFirstUrl
     async function getProductDetail(event: MouseEvent, id: number) {
         try{
             const res = await axios.get(process.env.REACT_APP_STRAPI_LOCAL + '/api/products/'+id+'?populate=media')
             const productData: any = await res.data.data;
            
             //setFristUrl(process.env.REACT_APP_STRAPI_LOCAL + data?.attributes?.media?.data[0]?.attributes?.url)

             console.log("productData", productData)
             navigate("../products/"+id, {state:{product: productData}})
         } catch {
             console.log("ERROR")
         }
     }

    
    return (
        <Card className='custom-prime' onClick={(e) => {getProductDetail(e, data!.id)}}>
            <Card.Img variant="top" src={firstUrl} />
            <Card.Body className='d-flex justify-content-between flex-column'>
                <Card.Title>{data?.titleProduct}</Card.Title>

                <Card.Text>
                    <Markdown source={data?.description} />
                </Card.Text>
            
                <Button variant="custom-prime"  >read more...</Button>
            </Card.Body>
        </Card>
    );
}