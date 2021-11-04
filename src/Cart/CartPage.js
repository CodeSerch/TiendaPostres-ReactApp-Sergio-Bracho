import React, { useContext } from "react";
import { CartContext } from "../context/cartContext";

const CartPage = () =>{

    const { cartItems } = useContext(CartContext);

    return(
        <div>
            <h1>{JSON.stringify(cartItems, null, 2)}</h1>
        </div>
    )
}

export default CartPage;
