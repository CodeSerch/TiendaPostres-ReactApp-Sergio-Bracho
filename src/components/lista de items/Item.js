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
        <div class="card" style={{ width: "18rem", display: "flex", paddingTop:"20px", backgroundColor: "rgba(46, 46, 46,0.2)", marginRight:"40px", borderRadius:"5%", marginBottom:"30px"}}>
            <div style={{alignSelf: "center", margin:"0px"}}>
                <img class="imagen1" src={imgurl} alt="Card image cap"></img>
            </div>
            <div class="card-body">
                <h5 class="card-title">{name}</h5>
                <p style={{ color: "brown" }}>{price}$</p>
                <Link to={`/products/${id}`} style={{ textDecoration: "none" }}>
                    <button onClick={Added} type="button" class="button1" style={{ marginLeft: "auto", marginRight: "auto" }}>
                        Comprar
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default items;