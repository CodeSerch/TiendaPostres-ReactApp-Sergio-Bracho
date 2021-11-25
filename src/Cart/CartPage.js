import { remove } from "dom-helpers";
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import items from "../components/constanteItems";
import { CartContext } from "../context/cartContext";
import "../components/styles/styles.css";

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore/lite';
import firebaseConfig from "../firebaseConfig";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

//Obteniendo fecha
let today = new Date();
let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
let dateTime = date + ' ' + time;



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
    }

    function removeId(id) {
        //Encuentro el id del elemento dentro de mi array del contexto de carrito
        const found = cartItems.find(cartItems => cartItems.id === id);
        const index = cartItems.findIndex(item => item.id === id);

        //Le resto la cantidad de mi producto seleccionado al context de cantidad
        console.log("cantidad del item con id: " + id + " es igual a: " + found.cantidad);
        setCantidad(cantidad - found.cantidad);

        //Reseteo la cantidad de mi elemento dentro del array de cart context
        console.log("vaciando cantidad del item con id: " + id + " con una cantidad de: " + found.cantidad);
        cartItems[index].cantidad = 0;
        console.log("cantidad nueva es de: " + cartItems[index].cantidad)


        const newArray = cartItems.filter(cartItems => cartItems.id != id);

        console.log("newArray = " + JSON.stringify(newArray));
        setCartItems(newArray);
    }

    async function CreateOrder(items) {
        const buyer = [{ name: prompt("Ingresar nombre") },
         { phone: prompt("Ingresar telefono") }, { email: prompt("Ingresar Correo") }]
        const itemsArray = new Array(items.length);
        for (let i = 0; i <= (items.length - 1); i++) {
            itemsArray[i] = {
                id: items[i].id,
                name: items[i].name,
                price: items[i].price
            }
        }
        itemsArray.sort(function (a, b) {
            if (a.id > b.id) {
                return 1;
            }
            if (a.id < b.id) {
                return -1;
            }
            return 0;
        });
        console.log("items array length: " + itemsArray.length + " items array: " + JSON.stringify(itemsArray));

        // Add a new document with a generated id.
        const docRef = await addDoc(collection(db, "ordenes"), {
            items: itemsArray,
            buyer: buyer,
            fecha: dateTime,
            total: sumaTotal
        })
        console.log("orden creada => " + "Items:" + JSON.stringify(itemsArray) + " Comprador: " + JSON.stringify(buyer) 
        + ", Fecha: " + dateTime + ", Suma total: " + sumaTotal)
        console.log("Document written with ID: ", docRef.id);
        alert("Orden creada con id: " + docRef.id)
        clearCart();

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
                    { (cartItems.length <= 0) ? <br></br> : <button onClick={() => CreateOrder(cartItems)} class="button1" style={{ marginRight: "20px" }}>Crear Orden</button> }
                    <button onClick={clearCart} class="button1" style={{ marginRight: "20px" }}>Limpiar carrito</button>

                </div>
            </div>
        </div>
    )
}

export default CartPage;
