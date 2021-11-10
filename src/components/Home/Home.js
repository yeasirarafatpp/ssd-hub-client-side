import React from 'react';
import ssdBanner from '../../images/ssd-banner.jpg'
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <img style={{ width: '100%' }} src={ssdBanner} alt="Banner" />
            <Products></Products>
        </div>
    );
};

export default Home;