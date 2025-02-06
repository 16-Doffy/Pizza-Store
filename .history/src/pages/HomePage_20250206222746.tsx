import React from "react";
import CardPizza from "../sections/CardPizza";

const HomePage = () => {
  return (
    <div style={{ height: "calc(100vh - 309px)", padding: "4rem 4rem", overflow: "auto" }}>
      <div className="wrapper-card-items">
            <CardPizza title="Pizza thit bam" description="sot ca chua"/>
      </div>
    </div>
  );
};

export default HomePage;
