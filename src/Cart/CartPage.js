import React, { useContext } from "react";
import { CartContext } from "../context/cartContext";

const CartPage = () => {

    const { cartItems } = useContext(CartContext);

    return (
        <div style={{ marginTop: "30px", display:"inline-flex" }}>
            <div>
                <img src={cartItems.imgurl} alt="postre2" style={{ margin:"50px", width: "100px", height: "100px" }} />
            </div>
            <div>
                <br />
                <strong >{cartItems.name}</strong>
                <br />
                <strong>precio: {cartItems.price}</strong>
                <br />
                <strong>descripcion: {cartItems.description}</strong>
                <br />
                <strong>id: {cartItems.id}</strong>
                <br />
                <strong>stock: {cartItems.stock}</strong>
                <br />
            </div>
        </div>
    )
}

export default CartPage;
