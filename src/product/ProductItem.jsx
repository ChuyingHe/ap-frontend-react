import axios from 'axios';
import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';

class ProductItem extends Component {
    state = { firstPictureUrl: "" } 

    componentDidMount() {
        console.log("ProductItem = ", this.props.product)
        this.setState({ firstPictureUrl: this.props.product['attributes']['media']['data'][0]['attributes']['url']})
    }

    render() { 
        return (<>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={this.state.firstPictureUrl} />
            <Card.Body>
                <Card.Title>{this.props.product['attributes']['name']}</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
        </>);
    }
}
 
export default ProductItem;