import {
  ADD_TO_CART_FAIL,
  ADD_TO_CART_REMOVE,
  ADD_TO_CART_REQUEST,
  ADD_TO_CART_SUCCESS,
  REMOVE,
  REMOVE_CART_FAIL,
  REMOVE_CART_REQUEST,
  REMOVE_CART_SUCCESS,
} from "../constants/addconstants";

export const addtocart = (item) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ADD_TO_CART_REQUEST,
    });
    // const xx = getState().addtocart.carts;
    dispatch({
      type: ADD_TO_CART_SUCCESS,
      payload: item,
    });
  } catch (error) {
    dispatch({
      type: ADD_TO_CART_FAIL,
      payload: error,
    });
  }
};
export const removetocart = (id) => async (dispatch) => {
  // const xx = getState().addtocart.carts;
  dispatch({
    type: ADD_TO_CART_REMOVE,
    payload: id,
  });
};
export const Remove = (item) => async (dispatch) => {
  dispatch({
    type: REMOVE,
    payload: item,
  });
};
