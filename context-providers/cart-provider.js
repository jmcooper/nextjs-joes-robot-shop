import { createContext, useContext, useEffect, useReducer } from "react";

const Context = createContext();

function cartReducer(state, action) {
  if (action.type === "updateCart") {
    return { ...action.payload }
  }
}

function fetchCart(cartDispatch) {
  fetch('/api/cart')
    .then(res => res.json())
    .then(data => cartDispatch({ type: 'updateCart', payload: data }))
}

export function CartProvider({ children }) {
  const [cart, cartDispatch] = useReducer(cartReducer, { products: [] });

  useEffect(() => fetchCart(cartDispatch), [])

  return (
    <Context.Provider value={{ cart, cartDispatch }}>{children}</Context.Provider>
  );
}

export function useCartContext() {
  return useContext(Context);
}