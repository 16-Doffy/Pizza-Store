import React from "react";

const HomePage = () => {
  return (
    <div
      style={{
        height: "calc(100vh - 309px",
        padding: "4rem",
        overflow: "auto",
      }}
    >
      <div className="wrapper-card-items">
        <div className="card-items">
          <img src="/pizza.png" alt="pizza" className="card-img-pizza" />

          <div style={{ height: "50%", width: "100%" }}></div>
          <div className="card-content">
            <div>
              <div style={{ fontSize: "20px", fontWeight: 600, color: "#fff" }}>
                Pizza thit bam
              </div>
              <div
                style={{
                  fontSize: "20px",
                  fontWeight: 600,
                  color: "#fff",
                  marginTop: "0.5rem",
                }}
              >
                Thit bam, sot ca chua
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
