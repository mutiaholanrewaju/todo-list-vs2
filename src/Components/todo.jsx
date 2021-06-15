import "../Styles/todo.css";
const MyTodo = ({text, todo, todos, setTodos, setInputText}) => {
        
        // marking an item as completed
    const handleComplete = () => {
        setTodos(
            todos.map((item) => {
                if(item.id === todo.id) {
                    return {...item, completed: !item.completed}
                }
                return item;
            })
        );
    }

    // deleting a Todo list item 
    const handleDelete =() => {
        setTodos(todos.filter((item) => item.id !== todo.id));
    };

    // editing the Todo list item when the edit button is clicked
    const handleEdit =({id}) => {
        setInputText(text);
    };

return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        <p>{text}</p>

        {/* This display a done button with Mark as done on hover*/}
        <button 
        className="button-complete task-button" 
        onClick={() => handleComplete(todo)} 
        title="Mark as done">
        <i className="fa fa-check-circle"></i>
        </button>

         {/* This display a delete button with Delete on hover*/}            
        <button 
        className="button-delete task-button" 
        onClick={() => handleDelete(todo)} title="Delete">
        <i className="fa fa-trash"></i>
        </button>

         {/* This display an edit button with Edit on hover*/}           
        <button 
        className="button-edit task-button" 
        onClick={() => handleEdit(todo)} title="Edit">
        <i className="fa fa-edit"></i>
        </button>
       </li>
     </div>
  );
}

export default MyTodo;

