import axios from 'axios';
import React, { MouseEvent, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";



export default function ProductItem({product}: any){
    // state = { firstPictureUrl: "" } 
    const [firstUrl, setFristUrl] = useState<string>('')
    console.log("firstUrl", firstUrl)
    let navigate = useNavigate(); 

    // todo fix setFirstUrl
    async function getProductDetail(event: MouseEvent, id: number) {
        try{
            const res = await axios.get(process.env.REACT_APP_STRAPI_LOCAL + '/api/products/'+id+'?populate=media')
            const productData: any = await res.data.data;
            
            setFristUrl(process.env.REACT_APP_STRAPI_LOCAL + product?.attributes?.media?.data[0]?.attributes?.url)

            console.log("productData", productData)
            navigate("../products/"+id, {state:{product: productData}})
        } catch {
            console.log("ERROR")
        }
    }

    
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={firstUrl} />
            <Card.Body>
                <Card.Title>{product?.attributes?.name}</Card.Title>
                <Card.Text>
                    {product?.attributes?.description}
                </Card.Text>
            
                <Button variant="primary" onClick={(e) => {getProductDetail(e, product.id)}} >In den Warenkorb</Button>
            </Card.Body>
        </Card>
    );
}