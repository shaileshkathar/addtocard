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

export const addtocartreducers = (state = { carts: [] }, { payload, type }) => {
  switch (type) {
    case ADD_TO_CART_REQUEST:
      return {
        ...state,
      };
    case ADD_TO_CART_SUCCESS:
      const iteamindex = state.carts.findIndex(
        (iteam) => iteam.id === payload.id
      );
      if (iteamindex >= 0) {
        state.carts[iteamindex].qnty += 1;
      } else {
        const temp = { ...payload, qnty: 1 };
        return {
          carts: [...state.carts, temp],
        };
      }

    case ADD_TO_CART_REMOVE:
      return {
        carts: state.carts.filter((item) => item.id !== payload),
      };
    case ADD_TO_CART_FAIL:
      return {
        payload,
      };

    case REMOVE:
      const iteamindex_dec = state.carts.findIndex(
        (iteam) => iteam.id === payload.id
      );
      if (state.carts[iteamindex_dec].qnty >= 1) {
        const dlitem = (state.carts[iteamindex_dec].qnty -= 1);
        console.log(...state.carts, dlitem);
        return {
          carts: [...state.carts],
        };
      } else if (state.carts[iteamindex_dec].qnty === 1) {
        // const data = state.carts.filter((item) => item.id !== payload);
        // return {
        //   ...state,
        //   carts: data,
        // };
        return {
          carts: state.carts.filter((item) => item.id !== payload),
        };
      }

    default:
      return state;
  }
};
// export const removecartreducers = (
//   state = { carts: [] },
//   { payload, type }
// ) => {
//   console.log(payload);
//   switch (type) {
//     case REMOVE_CART_REQUEST:
//       return {
//         ...state,
//       };
//     case REMOVE_CART_SUCCESS:
//       return {
//         carts: [...state, data],
//       };
//     case REMOVE_CART_FAIL:
//       return {
//         payload,
//       };
//     default:
//       return state;
//   }
// };
