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
        <div class="card" style={{ width: "18rem", display: "flex", backgroundColor: "rgba(125, 90, 80, 0.1)", marginRight:"40px", borderRadius:"5%", marginBottom:"30px"}}>
            <div style={{alignSelf: "center", paddingTop:"20px"}}>
                <img class="imagen1" src={imgurl} alt="Card image cap"></img>
            </div>
            <div class="card-body">
                <h5 class="card-title">{name}</h5>
                <h5 class="card-title">{id}</h5>
            </div>
            <div class="card-footer">
                <strong style={{ color: "gray" }}>precio: {price}$</strong>
                <Link to={`/products/${id}`} style={{ textDecoration: "none" }}>
                    <button onClick={Added} type="button" class="button1" style={{ marginLeft: "auto", marginRight: "auto" }}>
                        Comprar
                    </button>
                </Link>
                <small class="text-muted">Last updated 3 mins ago</small>
            </div>
        </div>
    )
}

export default items;