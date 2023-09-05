/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";

const useCounter = (defaultValue: number) => {
  const [count, setCount] = useState<number>(0);
  const increment = () => {
    setCount((prev) => prev + 1);
  };
  const decrement = () => {
    setCount((prev) => prev - 1);
  };
  return { increment, decrement, count };
};

export default useCounter;
