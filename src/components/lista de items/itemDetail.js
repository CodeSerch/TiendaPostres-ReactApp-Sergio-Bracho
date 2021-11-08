import React from "react"
import { useParams } from "react-router-dom"
import productsData from "../constanteItems"
import "../styles/styles.css";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { CartContext } from "../../context/cartContext";
import Contador from "../contador";


function ItemDetail() {
    
    const { cartItems, setCartItems } = useContext(CartContext);
    const { productId } = useParams();
    const thisProduct = productsData.find(prod => prod.id === productId);
    const [isAdded, setIsAdded] = useState(true);
    const Added = () => {
        const cartItem = cartItems.find(cart => cart.id === productId);
        if(cartItem) {
            console.log(cartItem);
            cartItem.cantidad++;
            console.log(cartItem.cantidad);
          }
          else {
            cartItems.push(thisProduct);
          }
        setCartItems(cartItems);

        if (isAdded){
            setIsAdded(false);
            console.log(isAdded);
        } else {
            setIsAdded(true);
            console.log(isAdded);
        }
      }
    return (
        <div style={{ marginLeft: "auto", marginRight: "auto", marginTop: "30px" }}>
            <div class="contenedorImagen" style={{ textAlign: "center", marginLeft: "auto", marginRight: "auto" }}>
                <img src={thisProduct.imgurl} alt="postre2" class="imagen1" style={{ width: "300px", height: "300px" }} />
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
                    <button type="button" class="button1" onClick={Added} style={{ textAlign: "start", marginRight: "15px" }}>
                        Agregar al Carrito


                    </button>
                    <Link to={`/products`} style={{ textDecoration: "none" }}>
                        <button type="button" class="button1">
                            Volver
                        </button>
                    </Link>
                </div>
                <div>
                    {isAdded ? <div><Contador/></div> : <h1>se añadio un producto</h1>}
                </div>
                
            </div>

        </div>
    )
}

export default ItemDetail;