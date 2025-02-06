import React, { useState } from "react";
import "./App.css";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import HomePage from "./pages/HomePage";

function App() {

  return (
    <div className="App">
    <Header></Header>
    <HomePage />
    <Footer />
    
    </div>
  );
}

export default App;
