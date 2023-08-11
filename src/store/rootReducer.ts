import { combineReducers } from "redux";
import productReducer from "./../duck/reducer";

const rootReducer = combineReducers({ productReducer });

export default rootReducer;
