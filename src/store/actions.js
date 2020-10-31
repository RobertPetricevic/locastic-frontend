export const OPEN_CART = "OPEN_CART";
export const CLOSE_CART = "CLOSE_CART";
export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";
export const TOGGLE_CHECKOUT = "TOGGLE_CHECKOUT";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const ADD_TO_CART_SELECT = "ADD_TO_CART_SELECT";

export const openCart = () => {
  return { type: OPEN_CART };
};

export const closeCart = () => {
  return { type: CLOSE_CART };
};

export const openModal = () => {
  return { type: OPEN_MODAL };
};
export const closeModal = () => {
  return { type: CLOSE_MODAL };
};

export const toggleCheckout = () => {
  return { type: TOGGLE_CHECKOUT };
};

export const addToCart = (item, quantity) => {
  return (dispatch) => {
    dispatch(openCart());
    dispatch({ type: ADD_TO_CART, product: { ...item, quantity } });
  };
};

export const addToCartSelect = (item, quantity) => {
  return { type: ADD_TO_CART_SELECT, product: { ...item, quantity } };
};

export const removeFromCart = (productId) => {
  return { type: REMOVE_FROM_CART, productId };
};
