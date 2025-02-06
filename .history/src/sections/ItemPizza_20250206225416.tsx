
import React from 'react';
import { Pizza } from '../models/Pizza.model';
//merch pizza &
type Props = Pizza & {
    handleChangePerson:(data:Pizza) => void;
};
const ItemPizza = (   {
    title,
    description,
    handleChangePerson
   }:Props ) => {
    return (
        <div>
           <div>{title}</div>
           <div>{description}</div>
           <button onClick={() => handleChangePerson({ title:'Doffy 2021', description:'hoc lap trinh 2021'})}>Change Person</button>
        </div>
    );
};

export default ItemPizza;