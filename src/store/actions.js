export const OPEN_CART = "OPEN_CART";
export const CLOSE_CART = "CLOSE_CART";
export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";
export const TOGGLE_CHECKOUT = "TOGGLE_CHECKOUT";

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
