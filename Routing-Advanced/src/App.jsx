import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Product from "./Pages/Product";
import NotFound from "./Pages/NotFound";
import Men from "./Pages/Men";
import Women from "./Pages/Women";
import Kids from "./Pages/Kids";
import Cources from "./Pages/Cources";
import CourceDetails from "./Pages/CourceDetails";
import Navbar2 from "./Components/Navbar2";

const App = () => {
  return (
    <div className="h-screen text-white bg-black">
      <Navbar />
      <Navbar2 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />}>
          <Route path="/product/men" element={<Men />} />
          <Route path="/product/women" element={<Women />} />
          <Route path="/product/kids" element={<Kids />} />
        </Route>
        <Route path="/Cources" element={<Cources/>} />
        <Route path="/Cources/:id" element={<CourceDetails />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
