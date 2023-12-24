import { useState } from "react";

function MessageBoard() {
  const [inputMessage, setInputMessage] = useState("");
  const [todo, setTodo] = useState([]);
  const addTodo = () => {
    const newTodo = [...todo];
    newTodo.push(inputMessage);
    setTodo(newTodo);
  };
  return (
    <div className="app-wrapper">
      <h1 className="app-title">Message board</h1>
      <div className="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            onChange={(event) => {
              setInputMessage(event.target.value);
            }}
            value={inputMessage}
          />
        </label>
        <button className="submit-message-button" onClick={addTodo}>
          Submit
        </button>
      </div>
      <div className="board">
        {todo.map((item, index) => {
          return (
            <div key={index} className="message">
              <h1>{item}</h1>
              <button className="delete-button">x</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MessageBoard;
