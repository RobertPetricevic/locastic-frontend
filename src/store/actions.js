export const OPEN_CART = "OPEN_CART";
export const TOGGLE_MODAL = "TOGGLE_MODAL";
export const TOGGLE_CHECKOUT = "TOGGLE_CHECKOUT";

export const openCart = () => {
  return { type: OPEN_CART };
};

export const toggleModal = () => {
  console.log("action");
  return { type: TOGGLE_MODAL };
};

export const toggleCheckout = () => {
  return { type: TOGGLE_CHECKOUT };
};
