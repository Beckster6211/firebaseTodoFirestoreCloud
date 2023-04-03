// import react from "react"

function Todo({ todo, toggleComplete, deleteTodo }) {
  return (
    <li className="li">
      <div>
        <input onChange={() => toggleComplete(todo)} type="checkbox" />
        <p onClick={() => toggleComplete(todo)}>{todo.text}</p>
      </div>
      <button onClick={() => deleteTodo(todo.id)}>trash</button>
    </li>
  );
}

export default Todo;
