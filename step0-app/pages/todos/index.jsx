import Link from "next/link";
import React, { useEffect, useState } from "react";
import axios from "axios";

const TodoPage = () => {
  const [todos, setTodos] = useState([]);
  useEffect(async () => {
    const resp = await axios.get("/api/todos");
    setTodos(resp.data);
  }, []);

  return (
    <>
      <h1>Todo List</h1>
      {todos.map((todo) => (
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
