import React, { useEffect, useState } from "react";
import CardPizza from "../sections/CardPizza";
import { Pizza } from "../models/Pizza.model";
import CountPizza from "../sections/CountPizza";

const HomePage = () => {
  const [pizzas, setPizzas] = useState<Pizza[]>([
    { id: 1, title: "Pizza thit heo", description: "sot muoi" },
    { id: 2, title: "Pizza pho mai", description: "sot pho mai" },
    { id: 3, title: "Pizza hai san", description: "sot hai san" },
  ]);

  const [count, setCount] = useState(0); // Dùng để cập nhật pizzas
  const [counter, setCounter] = useState(0); // Dùng để đếm số lần nhấn "Increase"

  useEffect(() => {
    // Cập nhật pizzas mỗi khi count thay đổi
    setPizzas((prevPizzas) => [
      ...prevPizzas,
      { id: prevPizzas.length + 1, title: "pizza test", description: "nhu cc" },
    ]);
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
    <div
      style={{
        height: "calc(100vh - 309px)",
        padding: "4rem 4rem",
        overflow: "auto",
      }}
    >
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

      <div style={{ display: 'flex', marginTop: '20px', marginBottom: '30px' }}>
        <button onClick={() => setCount(count + 1)}>Increase Pizza Count</button>
        <button onClick={handleDecrease}>Decrease Pizza</button>
      </div>

      <div style={{ marginLeft: '1000px' }}>
        <button onClick={() => setCounter(counter + 1)}>Increase Counter</button>
        <button onClick={() => setCounter(counter - 1)}>Decrease Counter</button>
      
        <CountPizza counter={counter} setCounter={setCounter} />
        <div>Counter: {counter}</div>
        <div>Pizza Count: {count}</div>
      </div>
    </div>
  );
};

export default HomePage;
