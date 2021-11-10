import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Rating } from '@mui/material';

const Review = () => {
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography variant="h5" component="div">
                    Client Name
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Client
                </Typography>
                <Typography variant="body2">
                    here will show client para
                </Typography>
                <Rating name="read-only" value={3} readOnly />
            </CardContent>
        </Card>
    );
};

export default Review;