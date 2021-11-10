import { Button } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h3>Nothing Found Please Go Back</h3>
            <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/">
                <Button variant="contained">Go Back to Home</Button>
            </NavLink>
        </div>
    );
};

export default NotFound;