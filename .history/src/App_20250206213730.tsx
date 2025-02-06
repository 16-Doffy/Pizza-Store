import React from "react";
import "./App.css";

function App() {
  let name = "doffy";
  const nameList = ["concac", "2034", "www"];
  const nameObj = {
    name: "Thirsd",
    old: 2023,
    email: "doffy@gmail.com",
  };
  const handleChangeName = () => {
    name = "thanhngan";
  };
  return (
    <div className="App">
      <div>{name}</div>
      <div>{nameList}</div>
      <div>{nameObj.name}</div>
      <div>{nameObj.old}</div>
      <div>{nameObj.email}</div>
      <button onClick={handleChangeName}>Change name</button>
    </div>
  );
}

export default App;
