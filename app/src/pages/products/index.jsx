import React from 'react';
import { Typography, Container } from '@material-ui/core';
import ProductContainer from '../../containers/products';
import './styles.scss';

export default function Products() {
  return (
    <div className="products-page">
      <Container>
        <Typography variant="h3" align="center" className="page--title">
          Products
        </Typography>
        <ProductContainer />
      </Container>
    </div>
  );
}
