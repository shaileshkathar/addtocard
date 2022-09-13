import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createstore,
} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { addtocartreducers } from "./reducers/addtocartreducer";
import { PageDataUrl, userloginreducers } from "./reducers/loginredu";
import { addproductsreducer } from "./reducers/productreducer";

const rootReducers = combineReducers({
  addtocart: addtocartreducers,
  userdata: userloginreducers,
  seracbar: addproductsreducer,
  Page: PageDataUrl,
});
const dd = localStorage.getItem("token")
  ? JSON.parse(localStorage.getItem("token"))
  : undefined;
const store = createstore(
  rootReducers,
  dd,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
