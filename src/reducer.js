export const initialState = {
    basket: [],
    user: null,
  };
  
  export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);
  
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_TO_BASKET":
        return {
          ...state,
          basket: [...state.basket, action.payload],
        };
  
      case "REMOVE_FROM_BASKET":
        const i = state.basket.findIndex(
          (basketItem) => basketItem.id === action.id
        );
        let newBasket = [...state.basket];
  
        if (i >= 0) {
          newBasket.splice(i, 1);
          newBasket = [...newBasket];
        } else {
          console.warn(
            `Cant remove product (id: ${action.id}) as its not in basket!`
          );
        }
  
        return {
          ...state,
          basket: newBasket,
        };
  
      case "SET_USER":
        return {
          ...state,
          user: action.user,
        };
  
      default:
        return state;
    }
  };
  
  export default reducer;
  