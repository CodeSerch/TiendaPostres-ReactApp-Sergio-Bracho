import { useEffect, useState } from "react";
import Item from "./Item";

import "./styles/styles.css";

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, query, where, doc, getDoc } from 'firebase/firestore/lite';
import firebaseConfig from "../firebaseConfig";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const productosCol = collection(db, 'productos');


const ItemListByCategory = ({ categoryId }) => {
    const [items, setItems] = useState([]);
  useEffect(() => {
    const q = query(productosCol, where("category", "==", parseInt(categoryId)));
    getDocs(q).then((querySnapshot) => {
      if (querySnapshot.size === 0) {
        console.log("no results")
      }
      setItems(querySnapshot.docs.map(doc => doc.data())).then(()=>{
      })
    }).catch((error) => {
      console.log("error searching  ", error);
    }).finally(() => {
      console.log("then finally");
    });
  }, []);

    return (
        <div style={{ fontFamily: "Paytone One" }}>
        <div class="itemList" style={{display:"flex", justifyContent:"center",marginBottom:"50px",marginTop:"10px", flexWrap:"wrap"}}>
                {items.map((items) => (
                    <Item key={items.id} {...items} />
                ))}
            </div>
        </div>
    )
};

export default ItemListByCategory;