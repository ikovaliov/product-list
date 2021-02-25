import React, { Component } from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Avatar, IconButton, CardHeader, CardActions, Button
} from '@material-ui/core';
import ShareIcon from "@material-ui/icons/Share";
import './styles.scss';

export default function ProductComponent({ item }) {
  const price = parseFloat(item.price).toFixed(2);

  return (
    <Grid item item xs={12} sm={6} md={4} lg={3} className="product-list--card" style={{ marginBottom: "30px" }}>
      <Card>
        <CardHeader
          action={
            <IconButton aria-label="settings">
              <ShareIcon />
            </IconButton>
          }
          title={item.name}
          subheader={item.brand}
        />

        <div className="product-list--card-body">
          <CardMedia style={{ height: "200px", backgroundSize: "contain" }} image={item.image} />
          <CardContent>
            <Typography variant="body2" component="p">
              $ {price}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">BUY NOW</Button>
            <Button size="small">OFFER</Button>
          </CardActions>
        </div>  
      </Card>
    </Grid>
  );
}
