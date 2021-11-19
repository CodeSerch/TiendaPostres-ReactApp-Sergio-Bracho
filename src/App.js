import "./App.css";
import NavBar from "./components/nav-bar/NavBar";
import ItemList from "./components/lista de items/ItemList";
//import items from "./components/constanteItems";
import { BrowserRouter, Switch, Route, } from "react-router-dom";
import ItemDetail from "./components/lista de items/itemDetail";
import "./components/styles/styles.css";
import CartPage from "./Cart/CartPage";
import { DataProvider } from "./context/cartContext";

import React, { useState, useEffect } from 'react';


import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

// TODO: Replace the following with your app's Firebase project configuration
import firebaseConfig from "./firebaseConfig";
//import items from "./components/constanteItems";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const productosCol = collection(db, 'productos');


// Get a list of productos from your database
/*async function getProductos(db) {
  const productosCol = collection(db, 'productos');
  const productoSnapshot = await getDocs(productosCol);
  const productoList = productoSnapshot.docs.map(doc => doc.data());
  return productoList;
}*/


//const arrayDeProductos = getProductos(db);
//const category1 


function App() {
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


console.log("items=> " + items)

  return (
    <DataProvider>
      <div>
        <BrowserRouter>
          <div className="App">
            <NavBar />
          </div>
          <div>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/products">
                <Products />
              </Route>
              <Route path="/products/:productId">
                <ItemDetail items={items} />
              </Route>
              <Route path="/category/:categoryId">
                <Category1 />
              </Route>
              <Route path="/cart" component={CartPage} exact />
            </Switch>
          </div>
        </BrowserRouter>

        <footer>&copy; Copyright 2021 Sergio Bracho</footer>

      </div>
    </DataProvider>

  );
  function Home() {

    return (
      <div>
        <div class="primaria" style={{ fontFamily: "Paytone One" }} >
          <header>
            <h1 class="titulo1">Tienda de Postres</h1>
            <img src=""></img>
          </header>
        </div>
      </div>
    )
  }
  function Products() {
    return (

      <div className="App">
        <div class="primaria">
          <header>
            <h1 class="titulo1">Tienda de Postres</h1>
            <img src=""></img>
          </header>
        </div>
        <ItemList items={items} />
      </div>
    );
  }
  function Category1() {
    return (
      <div className="App">
        <div class="primaria">
          <header>
            <h1 class="titulo1">Category1</h1>
            <img src=""></img>
          </header>
        </div>
        <ItemList items={items} />
      </div>
    );
  }
}

export default App;
