import axios from "axios";
import Link from "next/link";
import React from "react";
import { useQuery } from "react-query";
import { useAuth } from "../../shared/contexts/Auth";

const TodoPage = () => {
  const getTodos = async () => {
    const resp = await axios.get("/api/todos");
    return resp.data;
  };
  const { profile } = useAuth();

  const { isLoading, data } = useQuery("todos", getTodos);

  return (
    <>
      <h1>Todo List</h1>
      <pre>{JSON.stringify({ profile }, null, 2)}</pre>
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
