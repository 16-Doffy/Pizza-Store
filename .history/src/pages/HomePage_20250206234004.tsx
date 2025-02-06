import React, { useEffect, useState } from "react";
import CardPizza from "../sections/CardPizza";
import { Pizza } from "../models/Pizza.model";


const HomePage = () => {

    const [pizzas, setPizzas] = useState<Pizza[]>([
      {id: 1, title: 'Pizza thit heo', description:' sot muoi'},  
      {id: 2, title: 'Pizza pho mai', description:' sot pho mai'}, 
      {id: 3, title: 'Pizza hai san', description:' sot hai san'}, 
    ]);
    // const [person, setPerson] = useState<Pizza> ({
    //     title:'Doffy',
    //     description:'Lap trinh vien'
    // });
    // const handleChangePerson = (data:Pizza) =>{
    //     setPerson(data);
    // }
    // const hanldeRemovePizza = (id: number) =>{
    //     const indexPizza = pizzas.findIndex(item => item.id === id);
    //     let newPizza = [...pizzas];
    //     newPizza.splice(indexPizza, 1);
    //     setPizzas(newPizza);
    // }
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("render hook");
        setPizzas([...pizzas, { id: 4, title: "pizza test", description: "nhu cc" }]);
      }, []);
    
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
        </div>
      );
    };
    
    export default HomePage;