export const initialState = {
  ProductCart: [],
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        ProductCart: [...state.ProductCart, action.item],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        ProductCart: state.ProductCart.filter((item) => item.id !== action.id),
      };
      break;
    default:
      return state;
  }
};

export default reducer;
