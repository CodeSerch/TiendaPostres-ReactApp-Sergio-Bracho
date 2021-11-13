import React from "react"
import { useParams } from "react-router-dom"
import "../styles/styles.css";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { CartContext } from "../../context/cartContext";
import Contador from "../contador";


function ItemDetail({items}) {

    const [count, setCount] = useState(1);
    const { cartItems, setCartItems } = useContext(CartContext);
    const { cantidad, setCantidad } = useContext(CartContext);
    const { productId } = useParams();
    const thisProduct = items.find(prod => prod.id === productId);
    const [isAdded, setIsAdded] = useState(true);
    const Added = () => {
        if (isAdded) {
            setIsAdded(false);
            console.log(isAdded);
            const cartItem = cartItems.find(cart => cart.id === productId);
            if (cartItem) {
                console.log(cartItem);
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
            setCantidad(cantidad + (count));
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
        <div style={{ marginLeft: "auto", marginRight: "auto", marginTop: "30px" }}>
            <div class="contenedorImagen" style={{ textAlign: "center", marginLeft: "auto", marginRight: "auto" }}>
                <img src={thisProduct.imgurl} alt="postre2" class="imagen1" style={{ width: "200px", height: "200px" }} />
            </div>
            <div>

                <br />
                <strong >{thisProduct.name}</strong>
                <br />
                <strong>precio: {thisProduct.price}</strong>
                <br />
                <strong>descripcion: {thisProduct.description}</strong>
                <br />
                <strong>id: {thisProduct.id}</strong>
                <br />
                <strong>stock: {thisProduct.stock}</strong>
                <br />
                <div style={{ display: "flex", marginBottom: "30px" }}>
                    {isAdded ? <div>
                        <button type="button" class="button1" onClick={Added} style={{ textAlign: "start", marginRight: "15px" }}>
                            Agregar al Carrito
                        </button>
                        <Contador count={count} setCount={setCount} />
                    </div> : <div>

                        <Link to={`/cart`} style={{ textDecoration: "none" }}>
                            <button type="button" class="button1">
                                Finalizar compra
                            </button>
                        </Link>

                        <button type="button" class="button1" onClick={Added} style={{ textAlign: "start", marginRight: "15px" }}>
                            Añadir mas
                        </button>
                        <Link to={`/products`} style={{ textDecoration: "none" }}>
                            <button type="button" class="button1">
                                Volver
                            </button>
                        </Link>
                        se añadieron {count}  productos {count} </div>}
                </div>
            </div>

        </div>
    )
}

export default ItemDetail;