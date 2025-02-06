import React from "react";
import "./App.css";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import HomePage from "./pages/HomePage";
import CreatePizzaPage from "./pages/CreatePizzaPage";

function App() {

  return (
    <div className="App">
    <Header></Header>
    <CreatePizzaPage />
    <Footer />
    
    </div>
  );
}

export default App;
