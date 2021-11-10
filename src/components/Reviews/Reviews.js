import { Container } from '@mui/material';
import React from 'react';
import Review from '../Review/Review';

const Reviews = () => {
    return (
        <Container>
            <h2>What Client Say About Us</h2>
            <Review></Review>
        </Container>
    );
};

export default Reviews;