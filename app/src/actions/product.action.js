import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  SET_CURRENT_PAGE,
  SORT_BY_PRICE,
} from '../constants/product.constants';
import axios from 'axios';

export const fetchProducts = (currentPage, perPage, sortByPrice) => {
  return (dispatch) => {
    dispatch(fetchProductsRequest());

    let isSortByPrice = '';
    if (sortByPrice) {
      isSortByPrice = '&sort=' + sortByPrice;
    }

    axios
      .get(
        `http://localhost/api/product_list.php?per_page=${perPage}&page=${currentPage}${isSortByPrice}`
      )
      .then((response) => {
        const products = response.data;
        setTimeout(() => {
          dispatch(fetchProductsSuccess(products));
        }, 800);
      })
      .catch((error) => {
        dispatch(fetchProductsFailure(error));
      });
  };
};

export const fetchProductsRequest = () => {
  return {
    type: FETCH_PRODUCTS_REQUEST,
  };
};

export const fetchProductsSuccess = (payload) => {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload,
  };
};

export const fetchProductsFailure = (payload) => {
  return {
    type: FETCH_PRODUCTS_FAILURE,
    payload,
  };
};

export const setCurrentPage = (payload) => {
  return {
    type: SET_CURRENT_PAGE,
    payload,
  };
};

export const setSortByPrice = (payload) => {
  return {
    type: SORT_BY_PRICE,
    payload,
  };
};
