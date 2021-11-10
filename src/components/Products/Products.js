import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [allProducts, setAllProducts] = useState({});
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setAllProducts(data))
    }, []);
    return (
        <Container>
            <h2>Our Best Selling Product</h2>
            <Grid container spacing={2}>
                {/* {
                    allProducts.map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                } */}
            </Grid>
        </Container>
    );
};

export default Products;