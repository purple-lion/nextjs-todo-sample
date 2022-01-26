import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useQuery } from "react-query";

const Todo = () => {
  const getTodo = async (todoId) => {
    const resp = await axios.get(
      `https://jsonplaceholder.typicode.com/todos/${todoId}`
    );
    return resp.data;
  };

  const router = useRouter();
  const { id: todoId } = router.query;
  const { isLoading, data: todo } = useQuery(["todos", todoId], () =>
    getTodo(todoId)
  );

  return (
    <>
      {isLoading ? "loading ... " : <pre>{JSON.stringify(todo, null, 2)}</pre>}
      <hr />
      <Link href="/todos">back to Todo List</Link>
    </>
  );
};

export default Todo;
