import React, { useState } from "react";
import CardPizza from "../sections/CardPizza";

const HomePage = () => {

    const [pizzas, setPizzas] = useState<Pizza[]>([
      {id: 1, title: 'Pizza thit bam', description:' sot ca chua'},  
      {id: 2, title: 'Pizza pho mai', description:' sot pho mai'}, 
      {id: 3, title: 'Pizza hai san', description:' sot hai san'}, 
    ]);

  return (
    <div style={{ height: "calc(100vh - 309px)", padding: "4rem 4rem", overflow: "auto" }}>
      <div className="wrapper-card-items">
            <CardPizza title="Pizza thit bam" description="sot ca chua"/>
      </div>
    </div>
  );
};

export default HomePage;
