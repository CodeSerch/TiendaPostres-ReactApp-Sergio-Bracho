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
            <h1 style={{display:"flex", justifyContent:"center"}}>Ordenes</h1>
            <div class="itemList" style={{display:"flex", flexWrap:"wrap"}}>
                {orders.map(order => (
                    <div class="ordenes">
                        <text>
                            <b>Nombre:</b> {order.buyer[0].name}, <b>Telefono:</b> {order.buyer[1].phone}<br/>
                            <b>correo:</b> {order.buyer[2].email}<br/>
                            <b>Fecha de creacion:</b> {order.fecha}<br/>
                            <br/><h4><b>Productos:</b></h4>
                            {order.items.map(item =>(
                                <div>
                                <b>titulo:</b> {item.name}, <b>cantidad:</b> {item.cantidad}<br/>
                                <b>precio:</b> {item.price}, <b>id:</b> {item.id}<br/>
                                </div>
                            ))}
                            <h4><b>Total de la orden:</b> {order.total}</h4>
                        </text>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Orders
