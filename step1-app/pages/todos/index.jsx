import axios from "axios";
import Link from "next/link";
import React from "react";
import { useQuery } from "react-query";

const TodoPage = () => {
  const getTodos = async () => {
    const resp = await axios.get("/api/todos");
    return resp.data;
  };

  const { isLoading, data } = useQuery("todos", getTodos);

  return (
    <>
      <h1>Todo List</h1>
      {isLoading
        ? "loading .. "
        : data.map((todo) => (
            <div>
              <h3>
                <Link href={`/todos/${todo.id}`}>
                  <a>
                    <small>#{todo.id}</small> {todo.title}
                  </a>
                </Link>
              </h3>
              <p>userId: {todo.userId}</p>
              <p>{todo.completed ? "completed" : "not completed yet"}</p>
            </div>
          ))}
    </>
  );
};

export default TodoPage;
