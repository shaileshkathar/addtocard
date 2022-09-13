import { PAGE_ERROR, PAGE_REQUEST, PAGE_SUCCESS } from "../constants/herdersC";
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_LOGOUT,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
} from "../constants/loginconstant";

export const userloginreducers = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { ...state, loading: true };
    case USER_LOGIN_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case USER_LOGIN_FAIL:
      return { ...state, loading: false, error: action.payload };
    case USER_LOGIN_LOGOUT:
      return { state, user: {} };
    default:
      return state;
  }
};
export const PageDataUrl = (state = { pages: [] }, action) => {
  try {
    switch (action.type) {
      case PAGE_REQUEST:
        return state;
      case PAGE_SUCCESS:
        return { ...state, pages: action.payload };

      case PAGE_ERROR:
        return { ...state, pages: action.payload };
      default:
        return state;
    }
  } catch (error) {
    console.log(error);
  }
};
