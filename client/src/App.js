import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import SideMenu from "./components/SideMenu";
import Background from "./components/Background";

import Home from "./screens/Home";
import Product from "./screens/Product";
import Cart from "./screens/Cart";

function App() {
  const [sideToggle, setSideToggle] = useState(false);

  return (
    <Router>
      <Navbar click={() => setSideToggle(true)} />
      <SideMenu show={sideToggle} click={() => setSideToggle(false)} />
      <Background show={sideToggle} click={() => setSideToggle(false)} />
      <main className="app">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/product/:id" component={Product} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;