import React, { useState, useEffect } from "react";
import "../components/styles/styles.css";

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import firebaseConfig from "../firebaseConfig";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const productosCol = collection(db, 'ordenes');

const Orders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        //const productoSnapshot = getDocs(productosCol);
        getDocs(productosCol).then((querySnapshot) => {
            if (querySnapshot.size === 0) {
                console.log("no results")
            }
            setOrders(querySnapshot.docs.map(doc => doc.data())).then(() => {
            })
        }).catch((error) => {
            console.log("error searching");
        }).finally(() => {
            console.log("then finally");
        });
    }, []);

    return (
        <div>
            <h1>Ordenes</h1>
            <div class="ordenes">
                {orders.map(order => (
                    <div style={{ display: "flex" }}>
                        <text>
                            nombre: {order.buyer[0].name}<br/>
                            telefono: {order.buyer[1].phone}<br/>
                            correo: {order.buyer[2].email}<br/>
                            fecha de creacion: {order.fecha}<br/>
                            total de la orden: {order.total}<br/>
                            <br/><h4>Productos:</h4>
                            {order.items.map(item =>(
                                <div>
                                titulo: {item.name}<br/>
                                cantidad: {item.cantidad}<br/>
                                precio: {item.price}<br/>
                                id: {item.id}<br/>
                                </div>
                            ))}
                        </text>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Orders
