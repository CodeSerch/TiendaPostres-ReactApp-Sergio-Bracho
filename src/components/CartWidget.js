import React, { useContext } from "react";
import { CartContext } from "../Cart/cartContext";


const CartWidget = () => {
    
const { cantidad } = useContext(CartContext);

    return (
        <div>
            <i class="fas fa-shopping-cart fa-2x" ><div class="indiceCantidad">{(cantidad>0) ? cantidad : <div style={{display:"none"}}></div>}</div></i>
        </div>


    )
}

export default CartWidget
