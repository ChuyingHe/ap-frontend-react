import React, { Component } from 'react';
import axios from 'axios';

class ProductList extends Component {
    state = { 
        products:[]  

    } 

    componentDidMount() {
        this.getProducts();
    }

    async getProducts() {
        const res = await axios.get('/api/products');
        const products = await res;
        this.setState({products: products})
        console.log("PRODUCT", this.state.products)
    }

    render() { 
        return (<>
        PRODUCT
        </>);
    }
}
 
export default ProductList;