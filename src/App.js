import "./App.css";
import NavBar from "./components/nav-bar/NavBar";
import ItemList from "./components/lista de items/ItemList";
import ItemListByCategory from "./components/lista de items/ItemListByCategory";
//import items from "./components/constanteItems";
import { BrowserRouter, Switch, Route, useParams, Link } from "react-router-dom";
import ItemDetail from "./components/lista de items/itemDetail";
import "./components/styles/styles.css";
import CartPage from "./Cart/CartPage";
import { DataProvider } from "./context/cartContext";
import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from "./context/cartContext";
import CartCheckout from "./Cart/CartCheckout";
import Orders from "./Cart/Orders";


function App() {
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
                <ItemDetail />
              </Route>
              <Route path="/categorys/">
                <Categorys />
              </Route>
              <Route path="/category/:categoryId">
                <Category />
              </Route>
              <Route path="/cart" component={CartPage} exact />
              <Route path="/cartCheckout" component={CartCheckout} exact />
              <Route path="/orders" component={Orders} exact />
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
        <ItemList />
      </div>
    );
  }
  function Category() {
    const { categoryId } = useParams();
    return (
      <div className="App">
        <div>
          <header>
            <h1 class="titulo1">Categoria {categoryId}</h1>
            <img src=""></img>
          </header>
        </div>
        <ItemListByCategory categoryId={categoryId} />
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
