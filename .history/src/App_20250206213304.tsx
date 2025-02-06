import React from 'react';
import './App.css';

function App() {
  const name = "doffy";
  const nameList = ['concac','2034','www']
  const nameObj = {
    name:'Thirsd',
    old:2023,
    email:'doffy@gmail.com'
  }
  return (
    <div className="App">
      <h1>con cac</h1>
      {name}
      {nameList}
    </div>
  );
}

export default App;
