import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const dataFixed = ["null prueba"];


export const DataProvider = ({ children }) => {
    const getLastProduct = () => {
        let productString = localStorage.getItem('cartItems');
        console.log("productoString:" + productString)
        if (productString === "") {
            return []
        } else {
            let products = JSON.parse(productString)
            console.log("products:" + productString)
            return products
        }
    }
    const getCantidad = () => {
        let productString = localStorage.getItem('cantidad');
        let cantidad = JSON.parse(productString);
        console.log("cantidad:" + productString);
        return cantidad
    }


    const [cartItems, setCartItems] = useState(getLastProduct);
    const [cantidad, setCantidad] = useState(getCantidad);
    const [categoryId, setCategoryId] = useState(0);
    /*useEffect(() => {
        setCartItems(JSON.parse(localStorage.getItem('cartItems')))
    });*/

    return (
        <CartContext.Provider value={{
            cartItems,
            setCartItems,
            cantidad,
            setCantidad,
            categoryId,
            setCategoryId,
        }}>
            {children}
        </CartContext.Provider>
    )
}

