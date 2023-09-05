import { ChangeEvent, useCallback, useState } from "react";
interface InputType {
  [key: string]: string;
}
const useInput = ( initialState : InputType) => {
  const [input, setInput] = useState(initialState);

  const changeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);
  return { input, changeHandler };
};

export default useInput;
