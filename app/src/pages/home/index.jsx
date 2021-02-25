import React from 'react';
import { Typography, Container, Fab } from '@material-ui/core';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link as RouterLink } from 'react-router-dom';
import './styles.scss';

export default function Home() {
  return (
    <div className="home-page">
      <Container>
        <Typography variant="h3" align="center" className="page--title">
          Home
        </Typography>

        <Fab variant="extended" to="/products" component={RouterLink}>
          PRODUCTS
          <ShoppingBasketIcon />
        </Fab>
      </Container>
    </div>
  );
}
