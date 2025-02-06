import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("locals");
  const nameList = ["concac", "2034", "www"];
  const nameObj = {
    name: "Thirsd",
    old: 2023,
    email: "doffy@gmail.com",
  };
  const handleChangeName = () => {
    setName("con di");
  };
  console.log("render");
  return (
    <div className="App">
     this is homepage
    </div>
  );
}

export default App;
