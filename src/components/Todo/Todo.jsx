import "./Todo.css";
import Button from "./Button/Button";
import Input from "./Input/Input";
import { useState } from "react";
const Todo = () => {
  const [list, setList] = useState([]);
  const [item, setItem] = useState("");
  const [editIndex, setEditIndex] = useState("");
  const [updateItem, setUpdateItem] = useState("");

  const handleChange = (event) => {
    setItem(event.target.value);
  };

  const buttonHandle = () => {
    if (item.trim().length > 0) {
      setList((currList) => {
        return [{ item: item, complete: false }, ...currList];
      });
    }
    setItem("");
    clearState();
  };

  const editClick = (index) => {
    setEditIndex(index);
    setUpdateItem(list[index].item);
  };

  const deleteItem = (index) => {
    clearState();
    const newList = list.filter((item, key) => {
      return key !== index;
    });
    setList(newList);
  };

  const updateChange = (event) => {
    setUpdateItem(event.target.value);
  };

  const saveHandler = () => {
    if (updateItem.length > 0) {
      const newList = [...list];
      newList[editIndex].item = updateItem;
      setList(newList);
    }
    clearState();
  };

  const cancelHandler = () => {
    clearState();
  };

  const clearState = () => {
    setEditIndex("");
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
          {list.map((list, index) => {
            return (
              <li className="list-item" key={index}>
                {editIndex !== index && (
                  <div className="view-row">
                    <p className="view-row-text">{list.item}</p>
                    <div className="view-row-action">
                      <ion-icon
                        name="create-outline"
                        onClick={() => {
                          editClick(index);
                        }}
                      ></ion-icon>
                      <ion-icon
                        name="trash-outline"
                        onClick={() => {
                          deleteItem(index);
                        }}
                      ></ion-icon>
                    </div>
                  </div>
                )}

                {editIndex === index && (
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
