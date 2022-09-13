import axios from "axios";
import { PAGE_ERROR, PAGE_REQUEST, PAGE_SUCCESS } from "../constants/herdersC";
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_LOGOUT,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
} from "../constants/loginconstant";

export const userlogin = (logdata) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });
    const { data } = await axios.post(
      "http://localhost:5000/api/v1/login",
      logdata
    );
    console.log(data);
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
    localStorage.setItem("token", JSON.stringify(data));
  } catch (error) {
    dispatch({ type: USER_LOGIN_FAIL, payload: error });
  }
};

export const userlogout = () => (dispatch) => {
  dispatch({ type: USER_LOGIN_LOGOUT });
  localStorage.removeItem("token");
};
export const PageAllDAtaAction = () => async (dispatch) => {
  try {
    dispatch({
      type: PAGE_REQUEST,
    });
    const { data } = await axios.get("http://localhost:5000/api/v1/menuget");
    console.log(data);
    dispatch({
      type: PAGE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PAGE_ERROR,
      payload: error,
    });
  }
};
