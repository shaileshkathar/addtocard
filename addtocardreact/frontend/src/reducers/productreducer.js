import {
  ADD_PRODUCTS_FAIL,
  ADD_PRODUCTS_REQUEST,
  ADD_PRODUCTS_SUCCESS,
} from "../constants/productsconstas";

export const addproductsreducer = (state = { SerachInput: "" }, action) => {
  switch (action.type) {
    case ADD_PRODUCTS_REQUEST:
      return { ...state, loading: true };
    case ADD_PRODUCTS_SUCCESS:
      console.log(action.payload);
      return { ...state, loading: false, SerachInput: action.payload };
    case ADD_PRODUCTS_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
