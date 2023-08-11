import {
  FETCH_LIST_PRODUCT_REQUEST,
  FETCH_LIST_PRODUCT_SUCCESS,
  FETCH_LIST_PRODUCT_FAIL,
} from "./constants";
import { Action, Product, Result } from "./types";
import api from "./../utils/apiUtils";

const actFetchDataRequest = (): Action => ({
  type: FETCH_LIST_PRODUCT_REQUEST,
});
const actFetchDataSuccess = (data: Product[]): Action => ({
  type: FETCH_LIST_PRODUCT_SUCCESS,
  payload: data,
});
const actFetchDataFail = (error: any): Action => ({
  type: FETCH_LIST_PRODUCT_FAIL,
  payload: error,
});

export const fetchData = () => {
  return (dispatch: any) => {
    dispatch(actFetchDataRequest());

    api
      .get("Product")
      .then((result: Result<Product>) => {
        dispatch(actFetchDataSuccess(result.data.content));
      })
      .catch((error) => {
        dispatch(actFetchDataFail(error));
      });
  };
};
