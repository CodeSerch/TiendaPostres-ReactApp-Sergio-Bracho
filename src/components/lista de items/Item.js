import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/styles.css";
import { CartContext } from "../../context/cartContext";
import { useContext } from "react";

const items = ({ id, name, description, stock, imgurl, price }) => {
    const Added = () => {
        }

    return (
        <div class="contenedorImagen" style={{paddingLeft:"50px", paddingBottom:"50px"}}>
            <img src={imgurl} alt="postre2" class="imagen1" />
            <br />
            <strong style={{fontSize:"26px"}}>{name}</strong>
            <br />
            <strong style={{color:"gray"}}>precio: {price}$</strong>
            <Link to={`/products/${id}`} style={{textDecoration:"none"}}>
                <button onClick={Added} type="button" class="button1" style={{marginLeft:"auto", marginRight:"auto"}}>
                    Comprar
                </button>
            </Link>
        </div>
    )
}

export default items;