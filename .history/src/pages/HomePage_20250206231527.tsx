import React, { useState } from "react";
import CardPizza from "../sections/CardPizza";
import { Pizza } from "../models/Pizza.model";
import ItemPizza from "../sections/ItemPizza";

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
    const hanldeRemovePizza = (data:Pizza) =>{
        console.log(data);
    }
  return (
    <div style={{ height: "calc(100vh - 309px)", padding: "4rem 4rem", overflow: "auto" }}>
      <div className="wrapper-card-items">
      {
  pizzas.map(item => (
    <CardPizza key={item.id} id={item.id} title={item.title} description={item.description} />
  ))
}
      </div>
      <br />
      <ItemPizza title={person.title} description={person.description} handleChangePerson={handleChangePerson}/>
    </div>
  );
};

export default HomePage;
