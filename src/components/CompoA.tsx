/* eslint-disable @typescript-eslint/no-unused-vars */
// import React from "react";
// import useInput from "../hooks/useInput";

import useForm from "../hooks/useForm";

const CompoA = () => {
  // const { changeHandler, input } = useInput({ userName: "" });
  // const { loading, error, items } = useFetch("https://dummyjson.com/users/1");
  const onSubmit = (formState) => {
    console.log("data", formState);
  };
  const { error, inputChangeHandler, handleSubmit, formState } = useForm(
    { name: "", password: "" },
    onSubmit
  );

  // if (loading) {
  //   return <>Loading...</>;
  // }
  // console.log(items,"user");

  return (
    <div>
      <h1 className=" text-red-300">User Name:{formState.name}</h1>
      <h1 className=" text-green-300"> Password:{formState.password}</h1>
      <form onSubmit={handleSubmit}>
        <input
          className=" border-b border-b-gray-400 outline-none bg-transparent inline-block mr-5"
          type="text"
          name="name"
          value={formState.name}
        
          onChange={inputChangeHandler}
        />
        <input
          className=" border-b border-b-gray-400 outline-none bg-transparent"
          type="text"
          name="password"
          value={formState.password}
          onChange={inputChangeHandler}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CompoA;
