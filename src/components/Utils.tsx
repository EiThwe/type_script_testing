/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { ToDo } from "./ToDoList";

const todos: ToDo[] = [];
export const createTodos = () => {
  for (let i = 0; i < 50; i++) {
    todos.push({
      id: i,
      text: "ToDo" + (i + 1),
      completed: Math.random() > 0.5,
    });
  }
  return todos;
};
export const filterTodos = (todos: ToDo[], tab: string) => {
  const startTime = performance.now();
  while (performance.now() - startTime < 500) {
    console.log("in filter function");
  }
  return todos.filter((todo) => {
    if (tab == "all") {
      return true;
    } else if (tab == "active") {
      return !todo.completed;
    } else if (tab == "completed") {
      return todo.completed;
    }
  });
};
const Utils = () => {
  return <div>Utils</div>;
};

export default Utils;
