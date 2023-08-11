import {
  FETCH_LIST_PRODUCT_REQUEST,
  FETCH_LIST_PRODUCT_SUCCESS,
  FETCH_LIST_PRODUCT_FAIL,
} from "./constants";
import { AppState, Product, Action } from "./types";

const initialState: AppState<Product> = {
  loading: false,
  data: null,
  error: null,
};

const productReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case FETCH_LIST_PRODUCT_REQUEST:
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };

    case FETCH_LIST_PRODUCT_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };

    case FETCH_LIST_PRODUCT_FAIL:
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };

    default:
      return { ...state };
  }
};

export default productReducer;
