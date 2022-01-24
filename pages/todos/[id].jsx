import { useRouter } from "next/router";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const Todo = () => {
  const router = useRouter();
  const { id: todoId } = router.query;
  const [todo, setTodo] = useState(null);

  useEffect(async () => {
    const resp = await axios.get(
      `https://jsonplaceholder.typicode.com/todos/${todoId}`
    );
    setTodo(resp.data);
  }, [todoId]);
  return (
    <>
      <pre>{JSON.stringify(todo, null, 2)}</pre>
      <hr />
      <Link href="/todos">back to Todo List</Link>
    </>
  );
};

export default Todo;
