import React from "react";


const HomePage = () => {
    const logo = require("../asset/pizza.png");

  return <div style={{height:'calc(100vh - 309px', padding:'4rem', overflow:"auto"}}>
    <div className="wrapper-card-items">
        <div className="card-items">
            <img src={logo} alt="pizza" className="card-img-pizza" />
            <div style={{height:'50%', width:'100%'}}>

            </div>
            <div className="card-content">
                <div>
                    <div>Pizza thit bam</div>
                    <div>Thit bam, sot ca chua</div>
                </div>
            </div>
        </div>
    </div>
    </div>;
};

export default HomePage;
