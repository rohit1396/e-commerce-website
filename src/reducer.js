const reducer = (state, action) => {
  console.log(action);
  console.log(state);
  if (action.type === "ADD_TO_CART") {
    return {
      ...state,
      ProductCart: [...state.ProductCart, action.productData],
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
  throw new Error("no matching action type");
};

export default reducer;
