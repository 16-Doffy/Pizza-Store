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

  const [count, setCount] = useState(0);
  const [isCount, setIsCount] = useState(false);

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

      <div style={{ display: 'flex' , marginTop: '20px' ,marginBottom:'30px'}}>
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <button onClick={handleDecrease}>Decrease</button>
        </div>
        <div style={{marginLeft:'0 auto'}}>
        <button onClick={() => setIsCount(true)}>OpenCount</button>
        <button onClick={() => setIsCount(false)}>CloseCount</button>
        <div>{count}</div>
        {isCount && <CountPizza count={count} setCount={setCount} />}
      </div>
    </div>
  );
};

export default HomePage;
