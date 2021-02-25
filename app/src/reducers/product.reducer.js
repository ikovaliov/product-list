import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  SET_CURRENT_PAGE,
  SORT_BY_PRICE,
} from '../constants/product.constants';

const initialState = {
  items: [],
  isLoading: false,
  errors: {},
  currentPage: 1,
  perPage: 20,
  totalCount: 0,
  sortByPrice: '',
};

const productReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        items: payload.items,
        totalCount: payload.total_count,
        errors: {},
      };
    case FETCH_PRODUCTS_FAILURE:
      return {
        isLoading: false,
        items: [],
        errors: payload,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: payload,
      };
    case SORT_BY_PRICE:
      return {
        ...state,
        sortByPrice: payload,
      };
    default:
      return state;
  }
};

export default productReducer;
