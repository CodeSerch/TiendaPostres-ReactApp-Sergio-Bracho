import React from "react";
import { Card } from "react-bootstrap";

const items = ({ id, name, description, stock, imgurl }) => {
    const handleShowProductClick = () => {
        console.log(`Product ${id} clicked`);
    }
    return (
        <Card style={{ width: "18rem", display: "inline"} }>
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
                    <img src={imgurl} width="150" height="150"/>
                </Card.Text>
                <Card.Text>
                    <strong>Stock</strong> {stock}
                </Card.Text>
                <button variant="primary" onClick={handleShowProductClick}>
                    Ver detalle del producto
                </button>
            </Card.Body>
        </Card >
    )
}

export default items;