/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { ChangeEvent, FormEvent, useCallback, useState } from "react";

interface InitialStateType {
  [key: string]: string;
}
type SubmitType = (formData: InitialStateType) => Promise<void>;

const useForm = (initialState: InitialStateType, onSubmit: SubmitType) => {
  const [formState, setFormState] = useState<InitialStateType>(initialState);
  const [error, setError] = useState<InitialStateType>({});

  const inputChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const handleSubmit = useCallback(async (e: FormEvent) => {
    e.preventDefault();
    console.log("hello")
    try {
      await onSubmit;
    } catch (error) {
      if (error instanceof Error) {
        setError({ form: error.message });
      } else {
        setError({ form: "There is an error" });
      }
    }
  }, []);
  return { error, inputChangeHandler, handleSubmit, formState };
};

export default useForm;
