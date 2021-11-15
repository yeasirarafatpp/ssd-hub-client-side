import { Alert, Button, CircularProgress, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Signup = () => {
    const [loginData, setLoginData] = useState([]);
    const { user, registerUser, isLoading, authError } = useAuth();
    const history = useHistory();
    const handleOnChange = e => {
        const field = e.target.name;
        const data = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = data;
        setLoginData(newLoginData)
    }
    const handleLoginSubmit = e => {
        e.preventDefault();
        if (loginData.password !== loginData.RePassword) {
            alert('Your Password did not matched');
            return
        }
        registerUser(loginData.email, loginData.password, history);
    }

    return (
        <div>
            <h2>Please Sign UP</h2>
            {isLoading && <CircularProgress />}
            {user?.email && <Alert severity="success">User Created successfully!</Alert>}
            {authError && <Alert severity="error">{authError}</Alert>}
            <form onSubmit={handleLoginSubmit}>
                <TextField
                    type="text"
                    label="Name"
                    name="name"
                    variant="standard"
                    onChange={handleOnChange}
                />
                <br />
                <TextField
                    type="email"
                    label="Email"
                    name="email"
                    variant="standard"
                    onChange={handleOnChange}
                />
                <br />
                <TextField
                    type="password"
                    label="Password"
                    name="password"
                    variant="standard"
                    onChange={handleOnChange}
                />
                <br />
                <TextField
                    type="password"
                    label="Confirm Password"
                    name="RePassword"
                    variant="standard"
                    onChange={handleOnChange}
                />
                <br />
                <br />
                <Button variant="contained" type="submit">Sign Up</Button>
            </form>
        </div>
    );
};

export default Signup;