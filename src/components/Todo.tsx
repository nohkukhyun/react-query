import React from "react";
import { useQuery } from "react-query";

interface ITodoProps {
  userId: number;
  id: number;
  title: string;
  completed?: boolean;
}

const Todo = () => {
  const fetchTodo = () => {
    const rs = fetch("https://jsonplaceholder.typicode.com/todos").then(
      (res: any) => res.json()
    );
    return rs;
  };
  const { data, isLoading } = useQuery("fetchTodo", fetchTodo);
  const loading = isLoading && "Loading...";

  fetchTodo();

  return (
    <div>
      <ul>
        {loading}
        {data?.map((data: ITodoProps) => {
          return (
            <li key={data.id}>
              <span>{data.userId}</span>
              <span>{data.title}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Todo;
