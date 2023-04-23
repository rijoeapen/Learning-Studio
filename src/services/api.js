import axios from "axios";
export const getUsersApi = async () => {
  const response = await axios("https://jsonplaceholder.typicode.com/todos");
  //   const json = await response.json();
  return response.data;
};
