const UserList = ({ userList, setUserList }) => {
  const deleteUser = (index) => {
    const userListCopy = [...userList];
    userListCopy.splice(index, 1);
    setUserList(userListCopy);
  };

  console.log(userList);
  return (
    <>
      <h1>Users</h1>
      <ul style={{ width: "70rem", margin: "2rem auto" }}>
        {userList.map((user, index) => {
          return (
            <li
              key={user.id}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <span style={{ flex: "3" }}>{user.title}</span>
              <button style={{ flex: "1" }} onClick={() => deleteUser(index)}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default UserList;
