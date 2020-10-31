import {
  OPEN_CART,
  CLOSE_CART,
  OPEN_MODAL,
  CLOSE_MODAL,
  TOGGLE_CHECKOUT,
} from "./actions";

const initialState = {
  isModalOn: false,
  isCheckout: true,
  isCartOn: false,
  cartItems: [],
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        isModalOn: true,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        isModalOn: false,
      };
    case TOGGLE_CHECKOUT:
      return {
        ...state,
        isCheckout: !state.isCheckout,
      };
    case OPEN_CART:
      return {
        ...state,
        isCartOn: true,
      };
    case CLOSE_CART:
      return {
        ...state,
        isCartOn: false,
      };
    default:
      return state;
  }
};

export default appReducer;
