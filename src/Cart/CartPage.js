import { remove } from "dom-helpers";
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
//import items from "../components/constanteItems";
import { CartContext } from "../context/cartContext";
import "../components/styles/styles.css";



const CartPage = () => {
    const { cartItems, setCartItems } = useContext(CartContext);
    const { cantidad, setCantidad } = useContext(CartContext);

    const calcularTotal = () => {
        let suma = 0;
        if (cantidad >= 1) {
            for (let i = 0; i < cartItems.length; i++) {
                suma = suma + (parseFloat(cartItems[i].price) * (parseFloat(cartItems[i].cantidad)));
            }
            console.log("suma Total:" + suma);
        }
        return suma;
    }
    const [sumaTotal, setSumaTotal] = useState(calcularTotal);

    const clearCart = () => {
        cartItems.forEach((cartItems) => {
            console.log(cartItems.name + ", cantidad a eliminar: " + cartItems.cantidad)
            cartItems.cantidad = 0
            console.log(cartItems.name + ": " + cartItems.cantidad)
        });
        setCartItems([]);
        alert("se limpio el carrito")
        console.log("limpiando carrito");
        setCantidad(0);
        setSumaTotal(0);
        localStorage.setItem('cartItems', []);
        localStorage.setItem('cantidad', 0);
    }

    function removeId(id) {
        //Encuentro el id del elemento dentro de mi array del contexto de carrito
        const found = cartItems.find(cartItems => cartItems.id === id);
        const index = cartItems.findIndex(item => item.id === id);

        //Le resto la cantidad de mi producto seleccionado al context de cantidad
        console.log("cantidad del item con id: " + id + " es igual a: " + found.cantidad);
        setCantidad(cantidad - found.cantidad);
        localStorage.setItem('cantidad', (cantidad - found.cantidad));

        //Reseteo la cantidad de mi elemento dentro del array de cart context
        console.log("vaciando cantidad del item con id: " + id + " con una cantidad de: " + found.cantidad);
        cartItems[index].cantidad = 0;
        console.log("cantidad nueva es de: " + cartItems[index].cantidad)


        const newArray = cartItems.filter(cartItems => cartItems.id != id);

        console.log("newArray = " + JSON.stringify(newArray));
        setCartItems(newArray);
        localStorage.setItem('cartItems', JSON.stringify(newArray));
        
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <h1 class="cartH1">Lista de productos</h1>
            {(cartItems.length > 0) ? <br></br> : <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}><h1>carrito vacio</h1><Link to={`/products`} style={{ textDecoration: "none" }}>
                <button type="button" class="button1">
                    Volver
                </button>
            </Link></div>}
            {cartItems.map(items => (
                <div class="itemContainer" >
                    <div >
                        <img src={items.imgurl} alt="postre2" class="cartImg" />
                    </div>
                    <div style={{ width: "200px" }}>
                        <strong >{items.name} x {items.cantidad} u.</strong>
                        <br />
                        <strong >precio: {items.price}</strong >
                        <br />
                        <strong >id: {items.id}</strong >
                        <br />
                        <strong >total: {(items.price * items.cantidad)}</strong >
                    </div>
                    <button onClick={() => removeId(items.id)} class="button1" style={{ margin: "50px" }}> remover</button>
                </div>
            ))}
            <br />
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <h1 class="cartH1">Total del Carrito: {sumaTotal}</h1>
                <div style={{ marginBottom: "30px", display: "flex" }}>
                    {(cartItems.length <= 0) ? <br></br> : <Link to={`/cartCheckout`} style={{ textDecoration: "none" }}>
                        <button type="button" class="button1" style={{marginRight:"20px"}}>
                            Checkout
                        </button>
                    </Link>}
                    <button onClick={clearCart} class="button1">Limpiar carrito</button>

                </div>
            </div>
        </div>
    )
}

export default CartPage;
