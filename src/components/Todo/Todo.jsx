import "./Todo.css";
import Button from "./Button/Button";
import Input from "./Input/Input";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

const Todo = () => {
  const [list, setList] = useState({});
  const [item, setItem] = useState("");
  const [editId, setEditId] = useState("");
  const [updateItem, setUpdateItem] = useState("");

  useEffect(() => {
    axios.get("http://localhost:4001/api/todos").then((todos) => {
      setList(todos.data);
    });
    //w/o backend
    // if (JSON.parse(localStorage.getItem("list"))) {
    //   setList(JSON.parse(localStorage.getItem("list")));
    // }
  }, []);

  //old code for without backend
  // useEffect(() => {
  //   if (list.length > 0) {
  //     localStorage.setItem("list", JSON.stringify(list));
  //   } else {
  //     localStorage.removeItem("list");
  //   }
  // }, [list]);

  const handleChange = (event) => {
    setItem(event.target.value);
  };

  const buttonHandle = () => {
    if (item.trim().length > 0) {
      axios
        .post("http://localhost:4001/api/todo", { item })
        .then((todos) => {
          setList(todos.data);
          setItem("");
          clearState();
        })
        .catch((err) => {
          console.log(err);
          setItem("");
          clearState();
        });
      //w/o backend
      // setList((currList) => {
      //   return [{ item: item, complete: false, id: uuidv4() }, ...currList];
      // });
    }
    //w/o backend
    // setItem("");
    // clearState();
  };

  const editClick = (listItem) => {
    setEditId(listItem.id);
    setUpdateItem(listItem.item);
  };

  const deleteItem = (listItem) => {
    axios
      .delete("http://localhost:4001/api/todo/delete", {
        data: listItem,
      })
      .then((todos) => {
        setList(todos.data);
        clearState();
      })
      .catch((err) => {
        console.log(err);
        clearState();
      });

    // w/o backend
    // clearState();
    // const newList = list.filter((item, key) => {
    //   return item.id !== listItem.id;
    // });
    // setList(newList);
  };

  const updateChange = (event) => {
    setUpdateItem(event.target.value);
  };

  const saveHandler = () => {
    axios
      .put("http://localhost:4001/api/todo/update", { editId, updateItem })
      .then((todos) => {
        setList(todos.data);
        clearState();
      })
      .catch((err) => {
        console.log(err);
        clearState();
      });

    //w/o backend
    // let isChange = false;
    // if (updateItem.length > 0) {
    //   const updatedList = list.map((listItem) => {
    //     if (editId === listItem.id && listItem.item !== updateItem) {
    //       listItem.item = updateItem;
    //       isChange = true;
    //     }
    //     return listItem;
    //   });
    //   if (isChange) {
    //     setList(updatedList);
    //   }
    // }
    // clearState();
  };

  const a = [];

  const markComplete = (selected) => {
    //w/o backend
    // const newList = [...list];
    // if (!newList[index].complete) {
    //   newList[index].complete = true;
    //   setList(newList);
    // }

    //with backend

    if (!selected.complete) {
      axios
        .put("http://localhost:4001/api/todo/complete", selected)
        .then((todos) => {
          setList(todos.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const cancelHandler = () => {
    clearState();
  };

  const clearState = () => {
    setEditId("");
    setUpdateItem("");
  };

  return (
    <div className="todo-container">
      <header>
        <h1>Todo List</h1>
      </header>
      <section className="add-container">
        <Input
          type="text"
          placeholder="New Todo"
          flex={3}
          value={item}
          handleChange={handleChange}
        />
        <Button
          text="ADD TODO"
          buttonHandle={buttonHandle}
          style={{
            backgroundColor: "#0C5488",
            border: "none",
            borderRadius: "0.4rem",
            flex: 1,
          }}
        />
      </section>
      <section className="item-container">
        <ul className="list-items">
          {Object.keys(list).map((key) => {
            return (
              <li className="list-item" key={list[key]?.id}>
                {editId !== list[key]?.id && (
                  <div className="view-row">
                    <p
                      className={`view-row-text ${
                        list[key]?.complete ? "line" : ""
                      }`}
                      onClick={() => markComplete(list[key])}
                    >
                      {list[key].item}
                    </p>
                    <div className="view-row-action">
                      <ion-icon
                        name="create-outline"
                        onClick={() => {
                          editClick(list[key]);
                        }}
                      ></ion-icon>
                      <ion-icon
                        name="trash-outline"
                        onClick={() => {
                          deleteItem(list[key]);
                        }}
                      ></ion-icon>
                    </div>
                  </div>
                )}

                {editId === list[key]?.id && (
                  <div className="edit-row">
                    <Input
                      type="text"
                      placeholder=""
                      flex={3}
                      value={updateItem}
                      handleChange={updateChange}
                    />
                    <Button
                      text="SAVE"
                      buttonHandle={saveHandler}
                      style={{
                        backgroundColor: "#0C5488",
                        border: "none",
                        borderRadius: "0.4rem",
                        flex: 1,
                      }}
                    />
                    <Button
                      text="CANCEL"
                      buttonHandle={cancelHandler}
                      style={{
                        backgroundColor: "#8FA8C1",
                        border: "none",
                        borderRadius: "0.4rem",
                        flex: 1,
                        color: "#0C5488",
                      }}
                    />
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

export default Todo;
