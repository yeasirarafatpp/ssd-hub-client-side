import React, { useState } from 'react';
import { useParams } from 'react-router';

const BookProduct = () => {
    const { productId } = useParams();
    const [buyProduct, setBuyProduct] = useState({});
    return (
        <div>
            <h2>Hi {productId}</h2>
        </div>
    );
};

export default BookProduct;