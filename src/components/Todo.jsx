import React, { useEffect, useState } from "react";
import TodoItems from "./TodoItem";
import { addTodo, deleteTodos, getTodos, toggleTodoStatus } from "./Api";
import AddTodo from "./AddTodo";
import { Box, Spinner } from "@chakra-ui/react";

const Todo = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    handleTodo();
  }, []);
  function handleTodo() {
    setLoading(true);
    setError(false);
    getTodos()
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
      });
  }

  const handleToggle = (id, newStatus) => {
    setLoading(true);
    toggleTodoStatus({ id, newStatus }).then(() => handleTodo());
  };

  const handleAdd = (name, setText) => {
    setLoading(true);
    if (name !== "") {
      addTodo({ name, status: false }).then(() => {
        handleTodo();
      });
    }
    setText("");
  };
  const handleDelete = (id) => {
    setLoading(true);
    deleteTodos(id).then(() => {
      handleTodo();
    });
  };
  return (
    <div>
      {loading && (
        <div>
          <Spinner />
        </div>
      )}
      {error && (
        <div>
          <Spinner color="red.500" />
        </div>
      )}
      <AddTodo handleAdd={handleAdd} />
      <Box borderRadius={'2xl'} width={["95%", "80%", "60%", "50%"]} m="auto" minH={'80vh'} bg={"#94b7e9"}     mt="1rem"    p="1rem">
        {data.map((t) => (
          <TodoItems
            handleDelete={handleDelete}
            key={t.id}
            name={t.name}
            id={t.id}
            status={t.status}
            handleToggle={handleToggle}
          />
        ))}
      </Box >
    </div>
  );
};

export default Todo;
