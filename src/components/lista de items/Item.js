import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const items = ({ id, name, description, stock, imgurl }) => {
    const handleShowProductClick = () => {
    }

    return (
        <Card style={{ width: "18rem", display: "flex", backgroundColor: "#E5B299" }}>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    <img src={imgurl} width="250" height="250" style={{borderRadius: 20}} />
                </Card.Text>
                <Card.Text>
                    <strong>id</strong> {id}
                </Card.Text>
                <Card.Text>
                    <strong>description</strong> {description}
                </Card.Text>
                <Card.Text>
                    <strong>Stock</strong> {stock}
                </Card.Text>
                <Link to={`/products/${id}`}>
                    <button type="button">
                        ver Detalle
                    </button>
                </Link>
            </Card.Body>
        </Card >
    )
}

export default items;