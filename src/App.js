import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./router/Home";
import Detail from "./router/Detail";
import Navigation from "./components/Navigation";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Route exact={true} path="/" component={Home} />
      <Route exact={true} path="/:id" component={Detail} />
    </BrowserRouter>
  );
}

export default App;
