import React from "react";
import logo from "../assets/pizza.png";
const HomePage = () => {
  return <div style={{height:'calc(100vh - 309px', padding:'4rem', overflow:"auto"}}>
    <div className="wrapper-card-items">
        <div className="card-items">
            <img src={logo} alt="" className="card-img-pizza" />
        </div>
    </div>
    </div>;
};

export default HomePage;
