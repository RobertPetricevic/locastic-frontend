export const OPEN_CART = "OPEN_CART";
export const CLOSE_CART = "CLOSE_CART";
export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";
export const TOGGLE_CHECKOUT = "TOGGLE_CHECKOUT";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const ADD_TO_CART_SELECT = "ADD_TO_CART_SELECT";
export const EMPTY_CART = "EMPTY_CART";
export const FETCH_DATA = "FETCH_DATA";
export const STORE_ORDERS = "STORE_ORDERS";

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

export const emptyCart = () => {
  return { type: EMPTY_CART };
};

export const fetchData = (category, page) => {
  return async (dispatch, getState) => {
    let data;
    const response = await fetch(
      `http://localhost:3000/workshops?${
        category ? `category=${category}` : ""
      }&_sort=date&_order=dsc&_page=${page}&_limit=9`
    );
    const resData = await response.json();

    if (page !== 1) {
      data = [...getState().storedData, ...resData];
    } else {
      data = [...resData];
    }

    dispatch({ type: FETCH_DATA, data });
  };
};

export const storeOrders = () => {
  return async (dispatch, getState) => {
    const products = getState().cart.cartItems;
    const total = getState().cart.cartTotal;
    const response = await fetch("http://localhost:3000/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        products,
        total,
      }),
    });

    if (!response.ok) {
      throw new Error("Something went wrong!");
    }

    dispatch({ type: STORE_ORDERS });
  };
};
