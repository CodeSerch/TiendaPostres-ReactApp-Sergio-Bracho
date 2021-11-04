import React, { createContext, useState } from "react";

export const CartContext = createContext();

const dataFixed = []

export const DataProvider = ({children}) => {

    const [cartItems, setCartItems] = useState(dataFixed);


    return (
        <CartContext.Provider value={{
            cartItems,
            setCartItems
        }}>
            {children}
        </CartContext.Provider>
    )
}

