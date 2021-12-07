import React from "react"
import { useParams } from "react-router-dom"
import "./styles/styles.css";
import { Link } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { CartContext } from "../Cart/cartContext";
import Contador from "./contador";

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, query, where, doc, getDoc } from 'firebase/firestore/lite';
import firebaseConfig from "../firebaseConfig";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function ItemDetail() {
    const { productId } = useParams();
    const productosCol = collection(db, "productos");
    const [availableStock, setAvailableStock] = useState(true);

    const [thisProduct, setProduct] = useState([]);
    const [count, setCount] = useState(1);
    const { cartItems, setCartItems } = useContext(CartContext);
    const { cantidad, setCantidad } = useContext(CartContext);

    const [isAdded, setIsAdded] = useState(true);

    useEffect(() => {
        const q = query(productosCol, where("id", "==", parseInt(productId)));
        getDocs(q).then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
                setProduct(doc.data())
            });

        }).catch((error) => {
            console.log("error searching")
        }).finally(() => {
            console.log("loading false");
        });

        try {
        const cartItem = cartItems.find(cart => cart.id == productId);
        } catch (error) {
            console.log(error)
        }
        if (cartItem) {
            thisProduct.cantidad = cartItem.cantidad;
            if (cartItem.cantidad >= cartItem.stock) {
                setAvailableStock(false);
            }
        }
    }, []);

    const Added = () => {
        if (isAdded) {
            setIsAdded(false);
            const cartItem = cartItems.find(cart => cart.id == productId);
            console.log("this product cantidad: " + thisProduct.cantidad);
            if (cartItem) {
                thisProduct.cantidad = cartItem.cantidad;
            }

            if ((thisProduct.cantidad + count) > thisProduct.stock || count > thisProduct.stock) {
                console.log("no hay stock!");
                alert("No hay stock");
                setAvailableStock(false);
                setIsAdded(true);
            } else {
                if (cartItem) {
                    if (count > 1) {
                        cartItem.cantidad = cartItem.cantidad + count;
                    } else {
                        cartItem.cantidad++;
                    }
                    console.log(cartItem.cantidad);
                }
                else {
                    thisProduct.cantidad = count;
                    cartItems.push(thisProduct);
                }
                setCartItems(cartItems);
                localStorage.setItem('cartItems', JSON.stringify(cartItems));
                let cantidadNueva = cantidad + count;
                setCantidad(cantidadNueva);
                localStorage.setItem('cantidad', JSON.stringify(cantidadNueva));
            }
        } else {
            setIsAdded(true);
            setCount(1);
            console.log(isAdded);
        }

    }
    const removeId = () => {
        const newArray = cartItems.filter(cartItems => cartItems.id != productId);
        setCartItems(newArray);
    }

    return (
        <div style={{ backgroundColor: "white", fontFamily: "Paytone One" }} class="card-group">
            <div class="itemDetail">
                <div class="contenedorImagen" >
                    <img src={thisProduct.imgurl} alt={thisProduct.name} class="imagen2" />
                </div>
                <div class="contenedorTexto">

                    <br />
                    <strong >{thisProduct.name}</strong>
                    <br />
                    <strong>precio: </strong><font color="#808080">{thisProduct.price}</font>
                    <br />
                    <strong>stock: </strong><font color="#808080">{thisProduct.stock}</font>
                    <br />
                    <strong>id: </strong><font color="#808080">{thisProduct.id}</font>
                    <br />
                    <strong>descripcion: </strong><font color="#808080">{thisProduct.description}</font>
                    <br />
                    <strong>cantidad en carrito: </strong><font color="#808080">{thisProduct.cantidad}</font>
                    <br />
                    <div style={{ marginBottom: "30px", display: "flex", justifyContent: "center" }}>
                        {isAdded ? <div>
                            {availableStock ? <div style={{ display: "flex" }}>
                                <button type="button" class="button1" onClick={Added} style={{ marginRight: "15px" }}>
                                    Agregar al Carrito
                                </button>
                                <Contador count={count} setCount={setCount} />
                            </div> : <div><div style={{ display: "flex", alignItems: "center" }}>
                                <Link to={`/cart`} style={{ textDecoration: "none" }}>
                                    <button type="button" class="button1" style={{ marginLeft: "0px" }}>
                                        Finalizar compra
                                    </button>
                                </Link>
                                <button type="button" class="button1" style={{ marginLeft: "10px" }} >
                                    <Link to={`/products`} style={{ textDecoration: "none" }} >
                                        Volver
                                    </Link>
                                </button>

                            </div><h3 style={{ marginLeft: "40px" }}>no hay stock</h3></div>}
                        </div> : <div><div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>

                            <Link to={`/cart`} style={{ textDecoration: "none" }}>
                                <button type="button" class="button1" style={{ marginRight: "10px" }}>
                                    Finalizar compra
                                </button>
                            </Link>
                            <button type="button" class="button1" onClick={Added} style={{ marginRight: "10px" }}>
                                Añadir mas
                            </button>
                            <button type="button" class="button1" style={{ marginRight: "10px" }} >
                                <Link to={`/products`} style={{ textDecoration: "none" }}>
                                    Volver
                                </Link>
                            </button>
                            <br />
                        </div>
                            <h3 style={{ display: "flex", alignItems: "center" }}>se añadio {count} productos</h3></div>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;