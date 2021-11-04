import React, { useContext } from "react";
import { CartContext } from "../context/cartContext";

const CartPage = () => {

    const { cartItems } = useContext(CartContext);

    return (
        <div style={{ marginLeft:"25px"}}>
            <h1>Lista de productos</h1>
            {cartItems.map(items => (
                    <div style={{ marginTop: "30px", display:"inline-flex" }}>
                    <div>
                        <img src={items.imgurl} alt="postre2" style={{ margin:"20px", width: "100px", height: "100px" }} />
                    </div>
                    <div>
                        <br />
                        <strong >{items.name}</strong>
                        <br />
                        <strong>precio: {items.price}</strong>
                        <br />
                        <strong>id: {items.id}</strong>
                    </div>
                </div>
            ))}
        </div>
        /*<div style={{ marginTop: "30px", display:"inline-flex" }}>
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
        </div>*/
    )
}

export default CartPage;
