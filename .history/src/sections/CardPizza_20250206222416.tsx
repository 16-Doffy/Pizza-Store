import React from 'react';

const CardPizza = () => {
    return (
        <div>
               <div className="card-items">
          <img src="/pizza.png" alt="pizza" className="card-image-pizza " />
          <div style={{ height: "50%", width: "100%" }}></div>
          {/* Di chuyển card-content vào trong card-items */}
          <div className="card-content">
            <div>
              <div style={{ fontSize: "20px", fontWeight: 600, color: "#fff" }}>Pizza thit bam</div>
              <div style={{ fontSize: "16px", fontWeight: 600, color: "#fff", marginTop: "0.5rem" }}>
                Thit bam, sot ca chua
              </div>
            </div>
          </div>
        </div>
        </div>
    );
};

export default CardPizza;