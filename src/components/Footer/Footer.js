import { Container, Grid } from '@mui/material';
import React from 'react';

const Footer = () => {
    return (
        <Container style={{ textAlign: 'left' }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <h2>SSD HUB</h2>
                    <p>We are SSD HUB, and we are here to help you with all your technology needs. We aim to provide all the requirements of our customers and help them satisfy their needs, wants, and desires. We delight in seeing our customers happy and satisfied with our resiliency in providing them with their products. Our complete focus is on the customers. We keep tabs and records on what our customers want, and we try our level best to bring that for them</p>
                </Grid>
                <Grid item xs={12} md={6}>
                    <h2>Contact</h2>
                    <p>
                        Address: Bogura Bangladesh.
                        <br />
                        Phone: 012542545241
                        <br />
                        Email: contact@ssdhub.com
                    </p>
                </Grid>
            </Grid>
            <p className="text-center">Copyright All Right Reserved 2021</p>
        </Container>
    );
};

export default Footer;