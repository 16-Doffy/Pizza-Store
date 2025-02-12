import React, { useEffect } from 'react';
type Props = {
    count:number;
    setCount:(count:number) =>void;
}

const CountPizza = ({count, setCount}: Props) => {
    useEffect(() => {
        return () => {
            setCount(0);
        }
    },[]);
    return (
       <button onClick={() => setCount(count + 1)}>
       INcrease</button>
    );
};

export default CountPizza;