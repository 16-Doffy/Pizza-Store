
import React from 'react';
import { Pizza } from '../models/Pizza.model';
type Props = Pizza;
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