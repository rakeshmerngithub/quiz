import "./Todo.css";

import React, { useState } from "react";

const Todo = () => {
  const [text, setText] = useState("");
  const [array, setArray] = useState([{ data: "one", status: false }]);

  const buttonHandler = (e) => {
    e.preventDefault();
    setArray((pre) => [...pre, { data: text, status: false }]);
    setText("");
  };

  const deleteHandler = (ind) => {
    setArray((pre) => pre.filter((e, index) => index !== ind));
  };

  const completeHandler = (ind) => {
    setArray((pre) =>
      pre.map((elem, index) =>
        index === ind ? { ...elem, status: true } : elem
      )
    );
  };
  console.log(array);
  return (
    <>
      {
        <ol>
          {array.map((elem, index) => (
            <li key={index} className={elem.status && "linecut"}>
              {elem.data}
              <button onClick={() => completeHandler(index)}>Completed</button>
              <button onClick={() => deleteHandler(index)}>Delete</button>
            </li>
          ))}
        </ol>
      }
      <h1>Todo Lists</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={buttonHandler}>Add task</button>
    </>
  );
};

export default Todo;
