import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import Register from "./pages/Auth/Register";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Room from "./pages/Room";
import Rooms from "./pages/Rooms";
import Store from "./pages/Store";
import "./style/app.scss";

const App = () => {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/store" element={<Store />} />
        <Route path="/rooms/:id" element={<Room />} />
        <Route path="/store/:id" element={<Product />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </Fragment>
  );
};

export default App;
