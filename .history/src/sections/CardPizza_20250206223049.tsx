import React from "react";
type Props = {
  title?: string;
  description?: string;
};
const CardPizza = ({ title, description }: Props) => {
  return (
    
      <div className="card-items">
        <img src="/pizza.png" alt="pizza" className="card-image-pizza " />
        <div style={{ height: "50%", width: "100%" }}></div>
        <div className="card-content">
          <div>
            <div style={{ fontSize: "20px", fontWeight: 600, color: "#fff" }}>
              {title}
            </div>
            <div
              style={{
                fontSize: "16px",
                fontWeight: 600,
                color: "#fff",
                marginTop: "0.5rem",
              }}
            >
              {description}
            </div>
          </div>
        </div>
      </div>
 
  );
};

export default CardPizza;
