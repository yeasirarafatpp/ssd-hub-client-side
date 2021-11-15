import { Alert, Button, TextField } from '@mui/material';
import { getAuth, signInWithEmailAndPassword } from '@firebase/auth';
import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser } = useAuth();
    const location = useLocation();
    const history = useHistory();


    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    return (
        <div>
            <h2>Please Login</h2>
            {user?.email && <Alert severity="success">Login successfully!</Alert>}
            <form onSubmit={handleLoginSubmit}>
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
                <br />
                <Button variant="contained" type="submit">Login</Button>
            </form>
        </div>
    );
};

export default Login;