import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const items = ({ id, name, description, stock, imgurl }) => {
    const handleShowProductClick = () => {
    }

    return (
        <Card style={{ width: "18rem", display: "flex"  }}>
            <Card.Body>
                <Card.Title>Product</Card.Title>
                <Card.Text>
                    <strong>id</strong> {id}
                </Card.Text>
                <Card.Text>
                    <strong>Name</strong> {name}
                </Card.Text>
                <Card.Text>
                    <strong>description</strong> {description}
                </Card.Text>
                <Card.Text>
                    <img src={imgurl} width="150" height="150" />
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