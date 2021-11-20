import "./App.css";
import NavBar from "./components/nav-bar/NavBar";
import ItemList from "./components/lista de items/ItemList";
//import items from "./components/constanteItems";
import { BrowserRouter, Switch, Route, useParams, Link } from "react-router-dom";
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


function App() {
  const [items, setItems] = useState(0);
  //let categoryId = 1;

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


  console.log("App.js items=> " + items);

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
                <ItemDetail items={items}/>
              </Route>
              <Route path="/categorys/">
                <Categorys />
              </Route>
              <Route path="/category/:categoryId">
                <Category />
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
            <h1 class="titulo1" style={{ color: "white" }}>Tienda de Postres</h1>
            <img src=""></img>
          </header>
        </div>
      </div>
    )
  }
  function Products() {
    return (

      <div className="App">
        <h1 class="titulo1">Productos</h1>
        <ItemList items={items} />
      </div>
    );
  }
  function Category() {
    const { categoryId } = useParams();
    const categoryItems = () => {
      if (items.length == 0) {
        console.log("no items")
      } else {
        console.log("filtrando..")
        return items.filter(item => item.category == categoryId);
      }
    }
    return (
      <div className="App">
        <div>
          <header>
            <h1 class="titulo1">Categoria {categoryId}</h1>
            <img src=""></img>
          </header>
        </div>
        <ItemList items={categoryItems} />
      </div>
    );
  }
  function Categorys() {
    return (
      <div className="App">
        <div style={{ textAlign: "center", margin: "100px" }}>
          <Link to={`/category/${1}`} class="button1" style={{ margin: "50px", padding: "50px", backgroundColor: "#E5B299", borderRadius: "30px", fontSize: "30px" }}>
            Categoria 1
          </Link>
          <Link to={`/category/${2}`} class="button1" style={{ margin: "50px", padding: "50px", backgroundColor: "#E5B299", borderRadius: "30px", fontSize: "30px" }}>
            Categoria 2
          </Link>
        </div>
      </div>
    );
  }
}

export default App;
