import "./App.css";
import NavBar from "./components/nav-bar/NavBar";
import ItemList from "./components/ItemList";
import ItemListByCategory from "./components/ItemListByCategory";
import { BrowserRouter, Switch, Route, useParams, Link } from "react-router-dom";
import ItemDetail from "./components/itemDetail";
import "./components/styles/styles.css";
import CartPage from "./Cart/CartPage";
import { DataProvider } from "./Cart/cartContext";
import React from 'react';
import CartCheckout from "./Cart/CartCheckout";
import Orders from "./Cart/Orders";

function App() {
  return (
    <DataProvider>
      <div style={{ backgroundColor: "#FCDEC0" }}>
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
                <ItemList />
              </Route>
              <Route path="/products/:productId">
                <ItemDetail />
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

        <footer style={{ margin: "0px", padding: "0px", paddingTop: "10px", paddingBottom: "2px" }}>
          <h3>&copy; Copyright 2021 Sergio Bracho 

            <img src="http://assets.stickpng.com/images/5847f40ecef1014c0b5e488a.png"  style={{ width: "20px", height: "30px", marginBottom: "10px",marginLeft:"20px" }}></img>
          </h3>
          <section class="mb-4">
            <a class="btn btn-outline-dark btn-floating m-1" href="#!" role="button"><i class="fab fa-facebook-f"></i></a>
            <a class="btn btn-outline-dark btn-floating m-1" href="#!" role="button"><i class="fab fa-twitter"></i></a>
            <a class="btn btn-outline-dark btn-floating m-1" href="#!" role="button"><i class="fab fa-google"></i></a>
            <a class="btn btn-outline-dark btn-floating m-1" href="#!" role="button"><i class="fab fa-instagram"></i></a>
            <a class="btn btn-outline-dark btn-floating m-1" href="https://www.linkedin.com/in/sergio-bracho-059767176/" role="button"><i class="fab fa-linkedin-in"></i></a>
            <a class="btn btn-outline-dark btn-floating m-1" href="#!" role="button"><i class="fab fa-github"></i></a>
          </section>
        </footer>

      </div>
    </DataProvider>

  );
  function Home() {

    return (
      <div>
        <div class="primaria" style={{ fontFamily: "Paytone One" }} >
          <header>
            <h1 class="titulo1" style={{ color: "white" }}>Tienda de Postres</h1>
          </header>
        </div>
        <div style={{ backgroundColor: "#FCDEC0", justifyContent: "center", textAlign: "center" }}>
          <h1 class="titulo1" style={{ paddingTop: "20px" }}>Bienvenido!</h1>
          <div class="itemList" id="itemList">
            <div class="item">
              <img src="https://i.imgur.com/2fDnCV5.jpeg" style={{ borderRadius: "10px", width: "400px" }} />
              <h3 class="itemText">Los mas deliciosos de la ciudad! encarga ahora!</h3>
              <button class="button1">
                <Link to={`/products`} style={{ textDecoration: "none", marginRight: "10px" }}>
                  Ver Productos
                </Link>
              </button>
            </div>
            <div class="item">

              <img src="https://cdn.dribbble.com/users/2279668/screenshots/9163485/1.jpg" style={{ borderRadius: "10px", height: "16rem", width: "18rem " }} />
              <h3 class="itemText">Realizamos tu pedido lo mas pronto posible!</h3>

            </div>
          </div>
        </div>

      </div>
    )
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

}

export default App;
