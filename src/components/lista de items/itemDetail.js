import React from "react"
import { useParams } from "react-router-dom"
import "../styles/styles.css";
import { Link } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { CartContext } from "../../context/cartContext";
import Contador from "../contador";


function ItemDetail({items}) {
    const { productId } = useParams();
    const [thisProduct, setProduct] = useState(items.find(item => item.id == productId));

    const [count, setCount] = useState(1);
    const { cartItems, setCartItems } = useContext(CartContext);
    const { cantidad, setCantidad } = useContext(CartContext);


    const [isAdded, setIsAdded] = useState(true);
    const Added = () => {
        if (isAdded) {
            setIsAdded(false);
            console.log(isAdded);

            const cartItem = cartItems.find(cart => cart.id == productId);

            if ((count + cartItem.cantidad) >= cartItem.stock) {
                console.log("no hay mas stock!");
            } else {
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
                    <div style={{ marginBottom: "30px", display: "flex", justifyContent: "center" }}>
                        {isAdded ? <div style={{ display: "flex" }}>
                            <button type="button" class="button1" onClick={Added} style={{ marginRight: "15px" }}>
                                Agregar al Carrito
                            </button>
                            <Contador count={count} setCount={setCount} />
                        </div> : <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>

                            <Link to={`/cart`} style={{ textDecoration: "none" }}>
                                <button type="button" class="button1">
                                    Finalizar compra
                                </button>
                            </Link>

                            <button type="button" class="button1" onClick={Added} style={{ textAlign: "start" }}>
                                Añadir mas
                            </button>
                            <Link to={`/products`} style={{ textDecoration: "none" }}>
                                <button type="button" class="button1">
                                    Volver
                                </button>
                            </Link>
                            se añadio {count} productos</div>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;