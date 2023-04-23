import { useEffect, useState } from "react";
import "./App.css";
import UserList from "./components/UserList";
import { getUsersApi } from "./services/api";

function App() {
  const [userList, setUserList] = useState([]);

  const getUsers = async () => {
    // const response = await fetch(
    //   "https://jsonplaceholder.typicode.com/todos/1"
    // );
    // const json = await response.json();
    const list = await getUsersApi();
    setUserList(list);
  };

  useEffect(() => {
    // (async () => {
    //   const response = await fetch(
    //     "https://jsonplaceholder.typicode.com/todos/1"
    //   );
    //   const json = await response.json();
    //   setUserList(json);
    // })();
    getUsers();
  }, []);

  return (
    <div className="App">
      <UserList userList={userList} setUserList={setUserList} />
    </div>
  );
}

export default App;
