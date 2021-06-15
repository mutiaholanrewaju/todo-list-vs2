import './app.css';

import {useState} from 'react';
import Form from './Components/todo-form';
import TodoList from './Components/todo-list';


function App() {

	const [inputText, setInputText] = useState("");
	const [todos, setTodos, setEditTodo] = useState([]);

  return (
    <div className="App">
      <h1>My Todo List</h1>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        setEditTodo={setEditTodo}
      />
      <TodoList todos={todos} setTodos={setTodos} setInputText={setInputText} />
    </div>
  );
};

export default App;


