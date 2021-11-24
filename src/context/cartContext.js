import React, { createContext, useState } from "react";

export const CartContext = createContext();

const dataFixed = []

export const DataProvider = ({children}) => {

    const [cartItems, setCartItems] = useState(dataFixed);
    const [cantidad, setCantidad] = useState(0);
    const [categoryId, setCategoryId] = useState(0);
    return (
        <CartContext.Provider value={{
            cartItems,
            setCartItems,
            cantidad,
            setCantidad,
            categoryId,
            setCategoryId
        }}>
            {children}
        </CartContext.Provider>
    )
}

