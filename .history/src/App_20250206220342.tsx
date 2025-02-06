import React from "react";
import "./App.css";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

import CreatePizzaPage from "./pages/CreatePizzaPage";
import HomePage from "./pages/HomePage";

function App() {

  return (
    <div className="App">
    <Header />
    <HomePage />
    <CreatePizzaPage />
    <Footer />
    
    </div>
  );
}

export default App;
