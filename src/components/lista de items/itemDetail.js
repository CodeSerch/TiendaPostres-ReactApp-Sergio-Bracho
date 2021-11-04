import React from "react"
import { useParams } from "react-router-dom"
import productsData from "../constanteItems"
import "../styles/styles.css";
import { Link } from "react-router-dom";
import Contador from "../contador";
import { useEffect, useState, useContext } from "react";
import { CartContext } from "../../context/cartContext";


function ItemDetail() {
    
    const { setCartItems } = useContext(CartContext);
    const { productId } = useParams();
    const thisProduct = productsData.find(prod => prod.id === productId);
    const [isAdded, setIsAdded] = useState(true);
    const Added = () => {

        setCartItems(thisProduct);

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
                    {isAdded ? (<div>is added: <Contador></Contador></div>) : <h1>is not added</h1>}
                </div>
                
            </div>

        </div>
    )
}

export default ItemDetail;