import {
  OPEN_CART,
  CLOSE_CART,
  OPEN_MODAL,
  CLOSE_MODAL,
  TOGGLE_CHECKOUT,
  ADD_TO_CART,
  ADD_TO_CART_SELECT,
  REMOVE_FROM_CART,
  EMPTY_CART,
} from "./actions";

const initialState = {
  isModalOn: false,
  isCheckout: true,
  isCartOn: false,
  cart: {
    cartItems: [],
    cartTotal: 0,
  },
};

const appReducer = (state = initialState, action) => {
  let newProduct;
  let changedCartItems;
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
    case ADD_TO_CART:
      newProduct = action.product;

      if (state.cart.cartItems.find((item) => item.id === newProduct.id)) {
        changedCartItems = state.cart.cartItems.map((item) => {
          if (item.id === newProduct.id) {
            return {
              ...item,
              quantity: item.quantity + newProduct.quantity,
            };
          }
          return item;
        });
      } else {
        changedCartItems = state.cart.cartItems.concat(newProduct);
      }
      return {
        ...state,
        cart: {
          cartItems: changedCartItems,
          cartTotal:
            state.cart.cartTotal + newProduct.price * newProduct.quantity,
        },
      };

    case ADD_TO_CART_SELECT:
      newProduct = action.product;
      let quantityDifference;
      changedCartItems = state.cart.cartItems.map((item) => {
        if (item.id === newProduct.id) {
          quantityDifference = newProduct.quantity - item.quantity;
          return {
            ...item,
            quantity: newProduct.quantity,
          };
        }
        return item;
      });
      return {
        ...state,
        cart: {
          cartItems: changedCartItems,
          cartTotal:
            state.cart.cartTotal + newProduct.price * quantityDifference,
        },
      };
    case REMOVE_FROM_CART:
      const itemToRemove = state.cart.cartItems.find(
        (item) => item.id === action.productId
      );
      const minusTotal = itemToRemove.price * itemToRemove.quantity;

      return {
        ...state,
        cart: {
          cartItems: state.cart.cartItems.filter(
            (item) => item.id !== action.productId
          ),
          cartTotal: state.cart.cartTotal - minusTotal,
        },
      };
    case EMPTY_CART:
      return {
        ...state,
        cart: {
          cartItems: [],
          cartTotal: 0,
        },
      };
    default:
      return state;
  }
};

export default appReducer;
