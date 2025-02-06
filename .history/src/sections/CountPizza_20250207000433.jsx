import React from 'react';

type Props = {
  count: number;
  setCount: (count: number) => void;
};

const CountPizza = ({ count, setCount }: Props) => {
  return (
    <button onClick={() => setCount(count + 1)}>
      Increase
    </button>
  );
};

export default CountPizza;
