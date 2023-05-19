import { useEffect, useState } from "react";
import "./Users.css";
import axios from "axios";

const Users = () => {
  const [userList, setUserList] = useState([]);
  const [user, setUser] = useState("");

  const addUser = () => {
    if (user.trim().length > 0) {
      axios
        .post("http://localhost:4001/user", {
          name: user,
        })
        .then((users) => {
          setUserList(users.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const getUsers = () => {
    axios
      .get("http://localhost:4001/users")
      .then((users) => {
        setUserList(users.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="users-container">
      <section className="user-add-section">
        <input type="text" onChange={(event) => setUser(event.target.value)} />
        <button onClick={addUser}>Add User</button>
      </section>
      <section className="users-list-section">
        <ul>
          {userList.map((user, index) => (
            <li key={index}>{user.name}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Users;
