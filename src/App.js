import "./App.css";
import NavBar from "./components/nav-bar/NavBar";
import ItemList from "./components/lista de items/ItemList";
import items from "./components/constanteItems";
import { BrowserRouter, Switch, Route, } from "react-router-dom";
import ItemDetail from "./components/lista de items/itemDetail";
import Greeting from './components/Greeting';
import ItemListContainer from "./components/ItemListContainer"
import "./components/styles/styles.css";

function App() {
  return (
    <div>
      <div className="App">
      <NavBar />
      <div class="primaria">
        <header>
          <h1>Tienda de Postres</h1>
          <img src=""></img>
        </header>
        </div>
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
              <ItemDetail />
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
        <h2>Home</h2>;
        <Greeting />
        <ItemListContainer />
      </div>
    )
  }
  function Products() {
    return (
      <div className="App">
        <ItemList items={items} />
      </div>
    );
  }
  function Users() {
    return <h2>Users</h2>;
  }
}

export default App;
