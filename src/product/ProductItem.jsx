import axios from 'axios';
import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";



export default function ProductItem({product}){
    console.log("ProductItem", product?.attributes);
    // state = { firstPictureUrl: "" } 
    const [firstUrl, setFristUrl] = useState(process.env.REACT_APP_STRAPI_LOCAL + product?.attributes?.media?.data[0]?.attributes?.url)
    console.log("firstUrl", firstUrl)
    let navigate = useNavigate(); 


    async function getProductDetail(event, id) {
        try{
            const res = await axios.get(process.env.REACT_APP_STRAPI_LOCAL + '/api/products/'+id+'?populate=media')
            const productData = await res.data.data;
            console.log("productData", productData)
            navigate("../products/"+id, {state:{product: productData}})
        } catch {
            console.log("ERROR")
        }
    }

    
    return (<>
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={firstUrl} />
        <Card.Body>
            <Card.Title>{product?.attributes?.name}</Card.Title>
            <Card.Text>
            {product?.attributes?.description}
            </Card.Text>
        <Button variant="primary" onClick={(e) => {getProductDetail(e, product['id'])}} >In den Warenkorb</Button>
        </Card.Body>
    </Card>
    </>);
    
}