import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/">
                        <Button color="inherit">Home</Button>
                    </NavLink>
                    <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/shop">
                        <Button color="inherit">Shop</Button>
                    </NavLink>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        SSD HUB
                    </Typography>
                    <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/signup">
                        <Button color="inherit">Sign Up</Button>
                    </NavLink>
                    <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/login">
                        <Button color="inherit">Login</Button>
                    </NavLink>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;