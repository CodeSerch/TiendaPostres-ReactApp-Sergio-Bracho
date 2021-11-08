import { remove } from "dom-helpers";
import React, { useContext } from "react";
import { CartContext } from "../context/cartContext";

const CartPage = () => {

    const { cartItems, setCartItems } = useContext(CartContext);

    const clearCart = () => {
        setCartItems([]);
        console.log("limpiando carrito");
    }
    function removeId(id) {
        console.log("removiendo item por id" + id);
        const newArray = cartItems.filter(cartItems => cartItems.id != id);
        setCartItems(newArray);
    }

    return (
        <div style={{ marginLeft: "25px" }}>
            <h1>Lista de productos</h1>
            {cartItems.map(items => (
                <div>
                    <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", border:"2px solid gray", margin:"10px" }}>
                        <div >
                            <img src={items.imgurl} alt="postre2" style={{ margin: "20px", width: "100px", height: "100px", borderRadius: "10px" }} />
                        </div>
                        <div style={{width:"200px"}}>
                        <strong >{items.name} x {items.cantidad} u.</strong>
                        <br />
                        <strong >precio: {items.price}</strong >
                        <br />
                        <strong >id: {items.id}</strong >
                        </div>
                        <button onClick={() => removeId(items.id)} class="button1" style={{ margin: "50px"}}> remover</button>
                    
                    </div>

                </div>
            ))}
            <br />
            <div style={{ marginBottom: "30px", display: "flex" }}>
                <button onClick={clearCart} class="button1" style={{ marginRight: "20px" }}>limpiar carrito</button>

            </div>
        </div>
    )
}

export default CartPage;
