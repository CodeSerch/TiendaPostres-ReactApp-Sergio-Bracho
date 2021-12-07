import { useEffect, useState, useContext, useParams } from "react";
import Item from "./Item";
import "./styles/styles.css";

import { CartContext } from "../Cart/cartContext";

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import firebaseConfig from "../firebaseConfig";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const productosCol = collection(db, 'productos');


const Promises = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    //const productoSnapshot = getDocs(productosCol);
    getDocs(productosCol).then((querySnapshot) => {
      if (querySnapshot.size === 0) {
        console.log("no results")
      }
      setItems(querySnapshot.docs.map(doc => doc.data())).then(() => {
      })
    }).catch((error) => {
      console.log("error searching");
    }).finally(() => {
      console.log("then finally");
    });
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "center", backgroundColor: "#FCDEC0" }}>
      <div class="primaria" style={{ fontFamily: "Paytone One", backgroundImage: "url(https://www.setaswall.com/wp-content/uploads/2017/04/Dessert-Strawberry-Chocolate-Wallpaper-1920x1080.jpg)", marginBottom: "40px" }} >
        <header>
          <h1 class="titulo1" style={{ color: "white" }}>Productos</h1>
        </header>
      </div>
      <div style={{ fontFamily: "Paytone One", marginLeft: "40px", marginRight: "40px" }}>
        <div style={{display:"flex",justifyContent:"center"}}>
          <h2 style={{ color: "white", width: "500px",textShadow:"1px 1px 3px black" }}>
            Comprá on-line ahora
            Mirá todo lo que podés llevar a tu casa con un solo click
          </h2>
        </div>

        <div class="itemList" style={{ display: "flex", justifyContent: "center", marginBottom: "50px", marginTop: "10px", flexWrap: "wrap" }}>
          {items.map((items) => (
            <Item key={items.id} {...items} />
          ))}
        </div>
      </div>
    </div>
  )
};

export default Promises;