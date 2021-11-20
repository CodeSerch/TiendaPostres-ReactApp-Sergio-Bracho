import React from "react"
import { useParams } from "react-router-dom"
import "../styles/styles.css";
import { Link } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { CartContext } from "../../context/cartContext";
import Contador from "../contador";


function ItemDetail({ items }) {
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

            if ((thisProduct.cantidad + count) > thisProduct.stock) {
                console.log("no hay stock!");
                alert("No hay stock");
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
                    <strong>cantidad en carrito: </strong><font color="#808080">{thisProduct.cantidad}</font>
                    <br />
                    <div style={{ marginBottom: "30px", display: "flex", justifyContent: "center" }}>
                        {isAdded ? <div style={{ display: "flex" }}>
                            <button type="button" class="button1" onClick={Added} style={{ marginRight: "15px" }}>
                                Agregar al Carrito
                            </button>
                            <Contador count={count} setCount={setCount} />
                        </div> : <div><div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>

                            <Link to={`/cart`} style={{ textDecoration: "none" }}>
                                <button type="button" class="button1" style={{marginRight:"10px"}}>
                                    Finalizar compra
                                </button>
                            </Link>
                                <button type="button" class="button1" onClick={Added} style={{marginRight:"10px"}}>
                                    Añadir mas
                                </button>
                                <button type="button" class="button1" style={{marginRight:"10px"}} >
                                    <Link to={`/products`} >
                                        Volver
                                    </Link>
                                </button>
                                <br/>
                            </div>
                                <h3 style={{display:"flex", alignItems:"center"}}>se añadio {count} productos</h3></div>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;