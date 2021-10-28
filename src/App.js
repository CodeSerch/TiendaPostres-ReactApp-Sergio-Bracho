import "./App.css";
import NavBar from "./components/nav-bar/NavBar";
import ItemList from "./components/lista de items/ItemList";
import items from "./components/constanteItems";
import { BrowserRouter, Switch, Route, } from "react-router-dom";
import ItemDetailPromise from "./components/lista de items/itemDetailPromise";
import "./components/styles/styles.css";

function App() {
  return (
    <div>
      <div className="App">
        <NavBar />
      </div>
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/products">
              <Products />
            </Route>
            <Route path="/products/:productId">
              <ItemDetailPromise items={items} />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>

      <footer>&copy; Copyright 2021 Sergio Bracho</footer>

    </div>
  );
  function Home() {

    return (
      <div>
        <div class="primaria" style={{fontFamily:"Paytone One"}} >
          <header>
            <h1>Tienda de Postres</h1>
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
            <h1>Tienda de Postres</h1>
            <img src=""></img>
          </header>
        </div>
        <ItemList items={items} />
      </div>
    );
  }
  function Users() {
    return <h2>Users</h2>;
  }
}

export default App;
