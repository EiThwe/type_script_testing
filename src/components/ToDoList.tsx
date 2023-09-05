/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useMemo } from "react";
import { filterTodos } from "./Utils";

export interface ToDo {
  id: number;
  text: string;
  completed: boolean;
}
interface PropsType {
  isDark: boolean;
  todos: ToDo[];
  tab: string;
}
const ToDoList = ({ isDark, todos, tab }: PropsType) => {
  const filtertodos = useMemo(() => filterTodos(todos, tab), [todos, tab]);
  return (
    <div
      className={`${isDark ? "bg-black text-white" : "bg-white text-black"}`}
    >
      <div className="">
        {filtertodos.map((todo) => (
          <div key={todo.id}>
            <p>
              {todo.completed ? (
                <a className="text-red-500">{todo.text}</a>
              ) : (
                <p>{todo.text}</p>
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToDoList;
