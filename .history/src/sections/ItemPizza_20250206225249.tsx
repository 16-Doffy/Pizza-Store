
import React from 'react';
import { Pizza } from '../models/Pizza.model';
//merch pizza &
type Props = Pizza & {
    handleChangePerson:(data:Pizza) => void;
};
const ItemPizza = (   {
    title,
    description,
   }:Props ) => {
    return (
        <div>
           <div>{title}</div>
           <div>{description}</div>
        </div>
    );
};

export default ItemPizza;