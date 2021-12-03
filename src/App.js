
import React, { useState } from "react";
import ToDoList from "./ToDoList";

const App = () => {
  const [items, setItems] = useState("");
  const [showItems, setShowItems] = useState([]);

  const ItemEvent = (e) => {
    setItems(e.target.value);
  };
  // const listOfItems = () => {

  // };
  const deleteItem = (id) => {
    setShowItems((oldData) => {
      return oldData.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };
  // setShowItems((oldData) => {
  //   return oldData.filter((arrElem, index)=>{
  //     return index !==id;
  //   })
  // })

  const formSubmitHandler = (e) => {
    e.preventDefault();
    setShowItems((oldData) => {
      return [...oldData, items];
    });
    setItems("");
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <form className="form-container" onSubmit={formSubmitHandler}>
            <input
              type="text"
              placeholder="Add a Items"
              value={items}
              onChange={ItemEvent}
            />
            <button type="submit">+</button>
          </form>

          <ol>
            {/* <li>{items}</li> */}
            {showItems.map((itemvalue, index) => {
              return (
                <ToDoList
                  key={index}
                  id={index}
                  text={itemvalue}
                  onSelect={deleteItem}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};
export default App;