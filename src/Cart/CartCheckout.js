import React, { useState, useContext, useParams, setState } from "react";
import { Link } from "react-router-dom";
import "../components/styles/styles.css";
import { CartContext } from "../context/cartContext";
import { Form, Button, FormGroup, FormControl, ControlLabel, Col, Row } from "react-bootstrap";
import { width } from "dom-helpers";

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore/lite';
import firebaseConfig from "../firebaseConfig";
import Form2 from "./form";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

//Obteniendo fecha
let today = new Date();
let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
let dateTime = date + ' ' + time;


const CartCheckout = () => {

    const { cartItems, setCartItems } = useContext(CartContext);
    const { cantidad, setCantidad } = useContext(CartContext);
    const [values, setValues] = React.useState({
        nombre: '',
        correo: '',
        telefono: '',
        direccion: ''
    })

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
    const clearCart = () => {
        cartItems.forEach((cartItems) => {
            console.log(cartItems.name + ", cantidad a eliminar: " + cartItems.cantidad)
            cartItems.cantidad = 0
            console.log(cartItems.name + ": " + cartItems.cantidad)
        });
        setCartItems([]);
        alert("se limpio el carrito")
        console.log("limpiando carrito");
        setCantidad(0);
        setSumaTotal(0);
        localStorage.setItem('cartItems', []);
        localStorage.setItem('cantidad', 0);
    }
    const [sumaTotal, setSumaTotal] = useState(calcularTotal);
    //const [name] = useState("");

    async function CreateOrder(items) {
        if (true) {
            const buyer = [{ name: values.nombre },
            { phone: values.telefono }, { email: values.correo }]
            const itemsArray = new Array(items.length);
            for (let i = 0; i <= (items.length - 1); i++) {
                itemsArray[i] = {
                    id: items[i].id,
                    name: items[i].name,
                    price: items[i].price
                }
            }
            itemsArray.sort(function (a, b) {
                if (a.id > b.id) {
                    return 1;
                }
                if (a.id < b.id) {
                    return -1;
                }
                return 0;
            });
            console.log("items array length: " + itemsArray.length + " items array: " + JSON.stringify(itemsArray));

            // Add a new document with a generated id.
            const docRef = await addDoc(collection(db, "ordenes"), {
                items: itemsArray,
                buyer: buyer,
                fecha: dateTime,
                total: sumaTotal
            })
            console.log("orden creada => " + "Items:" + JSON.stringify(itemsArray) + " Comprador: " + JSON.stringify(buyer)
                + ", Fecha: " + dateTime + ", Suma total: " + sumaTotal)
            console.log("Document written with ID: ", docRef.id);
            alert("Orden creada con id: " + docRef.id);
            clearCart();
        }
    }


    const [validated, setValidated] = useState(false);

    const onSubmitForm = (event) => {
        event.preventDefault();
        //alert("datos del formulario:" + JSON.stringify(values));
        if (cartItems.length <= 0) {
            alert("carrito vacio, añade productos!")
            return false;
        } else {
            CreateOrder(cartItems);
        }
    };

    const onChangeName = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value })
    };



    return (
        <div>
            <h1>CartCheckout</h1>
            <div className="" style={{ display: "flex", flexDirection: "row" }}>
                <Form className="formCheckout" onSubmit={onSubmitForm}>
                    <Row className="mb-3 w-100">
                        <Form.Group as={Col} controlId="formGridNombre">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control onChange={onChangeName}
                                required type="text" name="nombre" placeholder="Nombre" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridCorreo">
                            <Form.Label>Correo</Form.Label>
                            <Form.Control onChange={onChangeName} required type="email" name="correo" placeholder="Correo" />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3 w-100">
                        <Form.Group as={Col} controlId="formGridTelefono">
                            <Form.Label>Telefono</Form.Label>
                            <Form.Control onChange={onChangeName} required type="text" name="telefono" placeholder="Telefono" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridDireccion">
                            <Form.Label>Direccion</Form.Label>
                            <Form.Control onChange={onChangeName} required name="direccion" placeholder="Direccion" />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" id="formGridCheckbox">
                        <Form.Check required type="checkbox" label="Aceptar Terminos" />
                    </Form.Group>
                    <div style={{ display: "flex" }}>
                        <button type="submit" class="button1" style={{ marginLeft: "20px" }}>
                            Finalizar Compra
                        </button>
                        <Link to={`/cart`} style={{ textDecoration: "none", marginLeft: "20px" }} >
                            <button type="button" class="button1">
                                Regresar al Carrito
                            </button>
                        </Link>
                    </div>
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
                    <div style={{ display: "flex", justifyContent: "center" }} >
                        <h3> #{cantidad} productos, Total: {sumaTotal}</h3>
                    </div>

                </div>

            </div>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>

            </div>


        </div>
    )
}


export default CartCheckout
