/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { useState, useCallback, useEffect } from "react";
const useFetch = (url: string) => {
  const [items, setItems] = useState<object[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    getItems();
  }, []);

  const getItems = useCallback(async () => {
    try {
      setLoading(true);
      const res = await fetch(url);
      const data = await res.json();
      setItems(data);
      setLoading(false);
    } catch (error) {
      setError(true);
    }
  }, []);
  return { loading, error, items };
};

export default useFetch;
