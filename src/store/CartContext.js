import { useState, createContext } from "react";

const CartContext = createContext({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  isOnCart: () => {},
});

export default CartContext;

export const CartContextProvider = ({ children }) => {
  const [cartState, setCartState] = useState([]);

  const addToCart = (id) => {
    const carsIdArr = [...cartState];
    carsIdArr.push(id);
    setCartState(carsIdArr);
  };

  const removeFromCart = (id) => {
    const filteredArr = [...cartState].filter((carId) => carId !== id);
    setCartState(filteredArr);
  };

  const isOnCart = (id) => {
    return cartState.includes(id);
  };

  const context = {
    cart: cartState,
    addToCart: addToCart,
    removeFromCart: removeFromCart,
    isOnCart: isOnCart,
  };

  return (
    <CartContext.Provider value={context}>{children}</CartContext.Provider>
  );
};
