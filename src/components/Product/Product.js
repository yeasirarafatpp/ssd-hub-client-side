import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions, Grid } from '@mui/material';
import { useHistory } from 'react-router';

const Product = ({ product }) => {
    const { _id, name, img, price, desc } = product;
    const history = useHistory();
    const handleBook = () => {
        history.push(`products/${_id}`)
    }
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="80%"
                    image={img}
                    alt="Product Image"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        ৳ {price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {desc}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button onClick={handleBook} size="small" color="primary">
                        Buy Now
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default Product;