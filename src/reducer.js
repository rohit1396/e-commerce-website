const reducer = (state, action) => {
  console.log(action);
  console.log(state);
  if (action.type === "ADD_TO_CART") {
    return {
      ...state,
      ProductCart: [...state.ProductCart, action.payload],
    };
  }
  if (action.type === "REMOVE_FROM_CART") {
    return {
      ...state,
      ProductCart: state.ProductCart.filter(
        (item) => item.id !== action.payload
      ),
    };
  }
  if (action.type === "LOADING") {
    return { ...state, loading: true };
  }

  if (action.type === "DISPLAY_PRODUCTS") {
    return { ...state, cart: action.payload, loading: false };
  }
  throw new Error("no matching action type");
};

export default reducer;
