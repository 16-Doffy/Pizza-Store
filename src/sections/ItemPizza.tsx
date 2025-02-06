
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
           <button onClick={() => handleChangePerson({ title:'Doffy 2222', description:'hoc lap trinh 1111'})}>Change Person</button>
        </div>
    );
};

export default ItemPizza;