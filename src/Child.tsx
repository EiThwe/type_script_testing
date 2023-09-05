/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from "react";

interface Props {
  fetchData: () => void;
}
const Child = ({ fetchData }: Props) => {
  useEffect(() => {
    const fetchUser = async () => {
      const data = await fetchData();
      console.log(data);
    };
    fetchUser();
  }, [fetchData]);

  return <div></div>;
};
export default Child;
