import React, { useEffect } from "react";

type Props = {
  count: number;
  setCount: (count: number) => void;
};

const CountPizza = ({ count, setCount }: Props) => {
  useEffect(() => {
    return () => {
      setCount(0); // Reset count khi component unmount
    };
  }, [setCount]);

  return (
    <button onClick={() => setCount(count + 1)}>
      Increase
    </button>
  );
};

export default CountPizza;
