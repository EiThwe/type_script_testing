/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { ChangeEvent, useCallback, useState, useEffect } from "react";
import useCounter from "./hooks/useCounter";
import useInput from "./hooks/useInput";
import CompoA from "./components/CompoA";
import useFetch from "./hooks/useFetch";

const App = () => {
  const { increment, decrement, count } = useCounter(1);
  const { input, changeHandler } = useInput({ name: "", password: "" });
  const { loading, error, items } = useFetch(
    "https://fakestoreapi.com/products/1"
  );

  if (loading) {
    return <>Loading...</>;
  }
  console.log(items);

  return (
    <div>
      <h1 className="text-green-300">name:{input.name}</h1>
      <input
        className=" border-b border-b-gray-400 outline-none bg-transparent"
        type="text"
        name="name"
        value={input.name}
        onChange={changeHandler}
      />
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>

      <CompoA />
    </div>
  );
};

export default App;
