import React, { useEffect, useState } from "react";
import CardPizza from "../sections/CardPizza";
import { Pizza } from "../models/Pizza.model";

const HomePage = () => {
  const [pizzas, setPizzas] = useState<Pizza[]>([
    { id: 1, title: "Pizza thit heo", description: "sot muoi" },
    { id: 2, title: "Pizza pho mai", description: "sot pho mai" },
    { id: 3, title: "Pizza hai san", description: "sot hai san" },
  ]);

  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("render hook");
    // Thêm pizza mới mỗi khi count thay đổi
    setPizzas([...pizzas, { id: 4, title: "pizza test", description: "nhu cc" }]);
  }, [count]);

  // Hàm để giảm số lượng pizza
  const handleDecrease = () => {
    setPizzas((prevPizzas) => {
      const newPizzas = [...prevPizzas];
      newPizzas.pop(); // Xóa pizza cuối cùng
      return newPizzas;
    });
  };

  return (
    <div style={{ height: "calc(100vh - 309px)", padding: "4rem 4rem", overflow: "auto" }}>
      <div className="wrapper-card-items">
        {pizzas.map((item) => (
          <CardPizza
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  );
};

export default HomePage;
