import React, { useContext } from "react";
import { CartContext } from "../context/cartContext";


const CartWidget = () => {
    
const { cantidad } = useContext(CartContext);

    return (
        <div>
            <i class="fas fa-shopping-cart fa-2x" style={{ marginRight: "25px" }}><strong>{cantidad}</strong></i>
        </div>


    )
}

export default CartWidget
