import { OPEN_CART, TOGGLE_MODAL, TOGGLE_CHECKOUT } from "./actions";

const initialState = {
  isModalOn: false,
  isCheckout: true,
  isCartOn: false,
  cartItems: [],
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MODAL:
      return {
        ...state,
        isModalOn: !state.isModalOn,
      };
    case TOGGLE_CHECKOUT:
      return {
        ...state,
        isCheckout: !state.isCheckout,
      };
    default:
      return state;
  }
};

export default appReducer;
