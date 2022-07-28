import axios from "axios";

export function getTodos() {
  return axios.get("http://localhost:8080/user/");
}

export function deleteTodos(id) {
  return axios({
    url: `http://localhost:8080/user/${id}`,
    method: "DELETE",
  });
}

export function addTodo({ name, status }) {
  return axios({
    url: `http://localhost:8080/user/`,
    method: "POST",
    data: {
      name,
      status,
    },
  });
}

export function toggleTodoStatus({ id, newStatus }) {
  return axios({
    url: `http://localhost:8080/user/${id}`,
    method: "PATCH",
    data: {
      status: newStatus,
    },
  });
}

// this /(slash) is important when we use something like id or pagination type things remember that
