import { Button, TextField } from '@mui/material';
import React from 'react';

const Login = () => {
    const handleLoginSubmit = (e) => {
        console.log('form submit')
        e.preventDefault();
    }
    return (
        <div>
            <h2>Please Login</h2>
            <form onSubmit={handleLoginSubmit}>
                <TextField
                    type="email"
                    label="Email"
                    name="email"
                    variant="standard"
                />
                <br />
                <TextField
                    type="password"
                    label="Password"
                    name="password"
                    variant="standard"
                />
                <br />
                <br />
                <Button variant="contained" type="submit">Login</Button>
            </form>
        </div>
    );
};

export default Login;