import React from "react"
import { useParams } from "react-router-dom"
import productsData from "../constanteItems"
import { Card } from "react-bootstrap";
import "../styles/styles.css";
import { Link } from "react-router-dom";

function ItemDetail() {
    const { productId } = useParams();
    const thisProduct = productsData.find(prod => prod.id === productId)
    
    return (
        <div class="contenedorImagen" style={{textAlign:"center", marginLeft:"auto",marginRight:"auto", marginTop:"30px"}}>
            <img src={thisProduct.imgurl} alt="postre2" class="imagen1" />
            <br />
            <strong>{thisProduct.name}</strong>
            <br />
            <strong>price: {thisProduct.price}</strong>
            <br />
            <strong>description: {thisProduct.description}</strong>
            <br />
            <strong>id: {thisProduct.id}</strong>
            <br />
            <strong>stock: {thisProduct.stock}</strong>
            <br />
            <button type="button" class="button1">Comprar</button>
            <Link to={`/products`} >
                <button type="button" class="button1" style={{marginBottom:"50px"}}>
                    volver a los productos
                </button>
            </Link>
        </div>
    )
}

export default ItemDetail;