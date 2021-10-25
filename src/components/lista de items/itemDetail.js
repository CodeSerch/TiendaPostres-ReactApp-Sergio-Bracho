import React from "react"
import { useParams } from "react-router-dom"
import productsData from "../constanteItems"
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function ItemDetail() {
    const { productId } = useParams();
    const thisProduct = productsData.find(prod => prod.id === productId)

    return (
        <div class="card text-center">
            <h1>ItemDetail</h1>
            <div>
                <Card style={{ width: "18rem", display: "inline" }}>
                    <Card.Body>
                        <Card.Title>Product</Card.Title>
                        <Card.Text>
                            <strong>id</strong> {thisProduct.id}
                        </Card.Text>
                        <Card.Text>
                            <strong>Name</strong> {thisProduct.name}
                        </Card.Text>
                        <Card.Text>
                            <strong>description</strong> {thisProduct.description}
                        </Card.Text>
                        <Card.Text>
                            <img src={thisProduct.imgurl} width="150" height="150" />
                        </Card.Text>
                        <Card.Text>
                            <strong>Stock</strong> {thisProduct.stock}
                        </Card.Text>
                    </Card.Body>
                </Card >
            </div>
        </div>
    )
}

export default ItemDetail;