import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [allProducts, setAllProducts] = useState([]);
    useEffect(() => {
        fetch('https://boiling-hamlet-28639.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setAllProducts(data))
    }, []);
    console.log(allProducts);
    return (
        <>
            <Container>
                <h2>Our Best Selling Product</h2>
                <Grid container spacing={2}>
                    {
                        !!allProducts && allProducts.slice(0, 6).map(product => <Product
                            key={product._id}
                            product={product}
                        ></Product>)
                    }
                </Grid>
            </Container>
        </>
    );
};

export default Products;