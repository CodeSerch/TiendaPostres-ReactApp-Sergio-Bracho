import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/styles.css";

const items = ({ id, name, description, stock, imgurl, price }) => {
    const handleShowProductClick = () => {
    }

    return (
        <div class="contenedorImagen" style={{paddingLeft:"50px", paddingBottom:"50px"}}>
            <img src={imgurl} alt="postre2" class="imagen1" />
            <br />
            <strong>{name}</strong>
            <br />
            <strong>price: {price}</strong>
            <button type="button" class="button1">Comprar</button>
            <Link to={`/products/${id}`} >
                <button type="button" class="button1">
                    ver Detalle
                </button>
            </Link>
        </div>
    )
}

export default items;