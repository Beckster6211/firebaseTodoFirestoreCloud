import "./App.css";
import React, { useState, useEffect } from "react";
import Todo from "./TodoLi";

import { db } from "./firebase";
import {
  query,
  collection,
  onSnapshot,
  updateDoc,
  doc,
  addDoc,
  deleteDoc,
} from "firebase/firestore";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  // create
  const createTodo = async (event) => {
    event.preventDefault(event);
    if (input === "") {
      alert("Please enter");
      return;
    }
    await addDoc(collection(db, "todo"), {
      text: input,
      completed: false,
    });
    setInput("");
  };

  // read
  useEffect(() => {
    const q = query(collection(db, "todo"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArr = [];
      querySnapshot.forEach((doc) => {
        todosArr.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArr);
    });
    return () => unsubscribe();
  }, []);

  // update
  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, "todo", todo.id), {
      completed: !todo.completed,
    });
  };

  // delete
  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, "todo", id));
  };

  return (
    <div className="App">
      <div className="container">
        <h3>firebase todo</h3>
        <form className="form" onSubmit={createTodo}>
          <input
            value={input}
            onChange={(event) => setInput(event.target.value)}
            type="text"
            placeholder="Enter here..."
          />
          <button>+</button>
        </form>
        <ul className="ul">
          {todos.map((todo, index) => (
            <Todo
              key={index}
              todo={todo}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
            />
          ))}
        </ul>
        {todos.length < 1 ? null : <p>{`You have ${todos.length} todos.`}</p>}
      </div>
    </div>
  );
}

export default App;
