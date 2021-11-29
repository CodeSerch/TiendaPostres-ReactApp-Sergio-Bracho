import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "../components/styles/styles.css";
import { CartContext } from "../context/cartContext";
import { Form, Button, FormGroup, FormControl, ControlLabel, Col, Row } from "react-bootstrap";
import { width } from "dom-helpers";

const CartCheckout = () => {
    const { cartItems, setCartItems } = useContext(CartContext);
    const { cantidad, setCantidad } = useContext(CartContext);

    const calcularTotal = () => {
        let suma = 0;
        if (cantidad >= 1) {
            for (let i = 0; i < cartItems.length; i++) {
                suma = suma + (parseFloat(cartItems[i].price) * (parseFloat(cartItems[i].cantidad)));
            }
            console.log("suma Total:" + suma);
        }
        return suma;
    }
    const [sumaTotal, setSumaTotal] = useState(calcularTotal);

    return (
        <div>
            <h1>CartCheckout</h1>
            <div className="" style={{ display: "flex", flexDirection: "row" }}>
                <Form className="ps-3" style={{ width: "800px" }}>
                    <Row className="mb-3 w-100">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control placeholder="Nombre" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Correo</Form.Label>
                            <Form.Control type="email" placeholder="Correo" />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3 w-100">
                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Direccion</Form.Label>
                            <Form.Control placeholder="Direccion" />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" id="formGridCheckbox">
                        <Form.Check type="checkbox" label="Checkbox" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>

                <div className="carritoList">
                    <div class="itemContainerCheckoutTitulo" >
                        <h1>Carrito</h1>
                    </div>
                    <div class="itemContainer2" >
                        {cartItems.map(items => (
                            <div style={{ display: "flex" }}>
                                <div class="itemContainerCheckout" >
                                    <p style={{ color: "red" }}>{items.name} x {items.cantidad} u.</p>
                                </div>
                                <div class="itemContainerCheckoutPrice" >
                                    <p > Total: {(items.price * items.cantidad)}</p >
                                </div>
                            </div>
                        ))}
                    </div>
                    <div style={{ display: "flex", justifyContent: "center"}} >
                            <h3> Total: {sumaTotal}</h3>
                        </div>
                    <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
                        <Link to={`/cart`} >
                            <button type="button" class="button1">
                                Regresar al Carrito
                            </button>
                        </Link>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default CartCheckout
