import axios from "axios";
import {
  ADD_PRODUCTS_FAIL,
  ADD_PRODUCTS_REQUEST,
  ADD_PRODUCTS_SUCCESS,
} from "../constants/productsconstas";

export const addproducts = (serachinput) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_PRODUCTS_REQUEST,
    });
    console.log(serachinput);
    dispatch({
      type: ADD_PRODUCTS_SUCCESS,

      payload: serachinput,
    });
  } catch (error) {
    dispatch({
      type: ADD_PRODUCTS_FAIL,
      payload: error,
    });
  }
};
