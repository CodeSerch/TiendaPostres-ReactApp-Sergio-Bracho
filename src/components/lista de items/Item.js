import React from "react";
import { Card } from "react-bootstrap";

const items = ({id, name, description, stock}) =>{
    const handleShowProductClick = () => {
        console.log(`Product ${id} clicked`);
    }
    return (
        <Card style={{ width: "18rem"}}>
            <Card.Body>
                <Card.Title>Product</Card.Title>
                <Card.Text>
                    <strong>Name</strong> {name}
                    <strong>description</strong> {description}
                    <strong>stock</strong> {stock}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default items;