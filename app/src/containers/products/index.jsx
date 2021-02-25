import React, { Component } from 'react';
import {
  fetchProducts,
  setCurrentPage,
  setSortByPrice,
} from '../../actions/product.action';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Grid,
  Select,
  InputLabel,
  FormControl,
  MenuItem,
} from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';

import Loader from '../../components/loader';
import ProductComponent from '../../components/product';
import { pagesCreator } from '../../utils/pages-creator.utils';
import './styles.scss';

class ProductContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchProducts(this.props.currentPage, this.props.perPage);
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.currentPage !== prevProps.currentPage ||
      this.props.sortByPrice !== prevProps.sortByPrice
    ) {
      this.props.fetchProducts(
        this.props.currentPage,
        this.props.perPage,
        this.props.sortByPrice
      );
    }
  }

  render() {
    const {
      loader,
      items,
      currentPage,
      totalCount,
      perPage,
      sortByPrice,
    } = this.props;
    const pagesCount = Math.ceil(totalCount / perPage);
    const pages = [];
    pagesCreator(pages, pagesCount, currentPage);

    return (
      <div className="product-list">
        <FormControl>
          <InputLabel id="sort-price-label">Sort by price</InputLabel>
          <Select
            labelId="sort-price-label"
            id="sort-price"
            value={sortByPrice}
            onChange={(e) => this.props.setSortByPrice(e.target.value)}
          >
            <MenuItem value="">Default</MenuItem>
            <MenuItem value={'asc'}>Price low-high</MenuItem>
            <MenuItem value={'desc'}>Price high-low</MenuItem>
          </Select>
        </FormControl>

        {loader ? (
          <Loader />
        ) : (
          <div className="product-list--cards">
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="stretch"
              spacing={2}
            >
              {items &&
                items.map((item) => (
                  <ProductComponent key={item.id} item={item} />
                ))}
            </Grid>
          </div>
        )}

        <div className="product-list--pages">
          <Pagination
            count={pages.length}
            page={currentPage}
            variant="outlined"
            shape="rounded"
            onChange={(e, val) => this.props.setCurrentPage(val)}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.products.items,
    loader: state.products.isLoading,
    currentPage: state.products.currentPage,
    totalCount: state.products.totalCount,
    perPage: state.products.perPage,
    sortByPrice: state.products.sortByPrice,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ...bindActionCreators(
      { fetchProducts, setCurrentPage, setSortByPrice },
      dispatch
    ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);
