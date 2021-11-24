import { useEffect, useState, useContext, useParams } from "react";
import { promises } from "../lista de items/promises";
import Item from "./Item";
import "../styles/styles.css";

import { CartContext } from "../../context/cartContext";

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import firebaseConfig from "../../firebaseConfig";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const productosCol = collection(db, 'productos');


const Promises = () => {
    const [items, setItems] = useState(0);
  useEffect(() => {
    //const productoSnapshot = getDocs(productosCol);
    getDocs(productosCol).then((querySnapshot) => {
      if (querySnapshot.size === 0) {
        console.log("no results")
      }
      setItems(querySnapshot.docs.map(doc => doc.data()));
    }).catch((error) => {
      console.log("error searching  ", error);
    }).finally(() => {
      console.log("loading false");
    });
  }, []);


  /*console.log("App.js items=> " + items);

  //const { cId } = useParams();
    const categoryItems = () => {
      if (items.length == 0) {
        console.log("no items")
      } else {
        console.log("filtrando..")
        return items.filter(item => item.category == cId);
      }
    }*/
    
  const { categoryId, setCategoryId } = useContext(CartContext);
  //setCategoryId(categoryItems);

    const [message, setMessage] = useState("");
    const [isSuccess, setIsSucces] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [isFinished, setIsFinished] = useState(false);
    const [currentItems, setCurrentItems] = useState([]);

    useEffect(() => {
        if (items) {
            promises(
                items,
                setMessage,
                setIsSucces,
                setIsLoading,
                setIsFinished,
                setCurrentItems
            );
        }
    }, [items]);

    return (
        <div style={{ fontFamily: "Paytone One" }}>
            {isLoading && <h3>Loading...</h3>}
        <div class="itemList" style={{display:"flex", justifyContent:"center",marginBottom:"50px",marginTop:"10px", flexWrap:"wrap"}}>
                {currentItems.map((items) => (
                    <Item key={items.id} {...items} />
                ))}
            </div>
        </div>
    )
};

export default Promises;