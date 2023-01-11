import CartTypes from "../types/cartTypes";

const initialState={
    hidden: true,
    cartItems: [],
    totalPrice: 0,
}

const addToCart = (state, action) => {
    const existingCartItem = state.cartItems.find(
        cartItem => cartItem.id === action.payload.id
      );
    
      if (existingCartItem) {
        return state.cartItems.map(cartItem =>
          cartItem.id === action.payload.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
    
      return [...state.cartItems, { ...action.payload, quantity: 1 }];
}

const clearFromCart = (state,action) => {
    const newCart = state.cartItems.filter(item => item.id !== action.payload.id);
    return newCart;
};

const RemoveItemFromCart = (state,action) => {
    if(action.payload.quantity === 1){
        return clearFromCart(state,action)
    }
    return state.cartItems.map(cartItem => cartItem.id === action.payload.id ? {...cartItem, quantity: cartItem.quantity - 1} : cartItem)
};

const TotalPrice = (state) => {
   const price =  state.cartItems.filter(val => Boolean(val.price) && Boolean(val.quantity)).reduce((acc, item) => {
        let itemTotalPrice = Number(item.quantity) * Number(item.price);

        itemTotalPrice = itemTotalPrice + acc;
        console.log(itemTotalPrice,"item total price");

        return itemTotalPrice;
        
    },0)
    return price
}

const cart = (state=initialState, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
              ...state,
              cartItems: addToCart(state,action),
            };
        case "TOGGLE_CART_HIDDEN":
            return {
                ...state,
                hidden: !state.hidden,
            };
        case "CLEAR_ITEM_FROM_CART":
            return {
                ...state,
                cartItems: clearFromCart(state,action),
            };
        case "REMOVE_ITEM":
            return {
                ...state,
                cartItems: RemoveItemFromCart(state,action),
            };
        case "UPDATE_PRICE":
            return {
                ...state,
                totalPrice: TotalPrice(state),
            };
        case "CLEAR_CART":
            return {
                ...state,
                cartItems: [],
            };
            
        default:
            return state;
    }
}

export const toggleCartHidden = () => ({
  type: CartTypes.TOGGLE_CART_HIDDEN
});

export default cart;