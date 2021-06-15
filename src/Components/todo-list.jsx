import "../Styles/todo-list.css";

import MyTodo from "./todo";

// This componentvimports the todos array and the states
function TodoList({ todos, setTodos, setInputText }) {
  // This returns a ul which is populated by the a list item created for every todo inputed
  return (
    <div className="todo-list-container">
      <ul className="todo-list">
        {todos.map((todo) => (
          <MyTodo
            text={todo.text}
            key={todo.id}
            todos={todos}
            setTodos={setTodos}
            todo={todo}
            setInputText={setInputText}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
