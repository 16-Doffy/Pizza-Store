import React, { useEffect } from "react";

type Props = {
  counter: number,
  setCounter: (counter: number) => void,
};

const CountPizza = ({ counter, setCounter }: Props) => {
  useEffect(() => {
    return () => {
      setCounter(0);
    };
  }, []);
  return <button onClick={() => setCounter(counter + 1)}>Increase</button>;
};

export default CountPizza;
