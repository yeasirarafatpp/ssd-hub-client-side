import { Button, TextField } from '@mui/material';
import React from 'react';

const Signup = () => {
    const handleSignupSubmit = (e) => {
        console.log('form signup')
        e.preventDefault();
    }
    return (
        <div>
            <h2>Please Sign UP</h2>
            <form onSubmit={handleSignupSubmit}>
                <TextField
                    type="text"
                    label="Name"
                    name="name"
                    variant="standard"
                />
                <br />
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
                <TextField
                    type="password"
                    label="Confirm Password"
                    name="RePassword"
                    variant="standard"
                />
                <br />
                <br />
                <Button variant="contained" type="submit">Sign Up</Button>
            </form>
        </div>
    );
};

export default Signup;