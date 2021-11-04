import React, { createContext, useState } from "react";

export const CartContext = createContext();

const dataFixed = {
    id:'0',
    name:"Carrito Vacio",
    description:"descripcion vacia",
    stock:'stock vacio',
    imgurl:'sin imagen'
}

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

