import React from 'react';
import "../Styles/todo-form.css";

// TThis properties in the form component are states declared  in the app component
function Form({ inputText, setInputText, todos, setTodos,  }) {
  // this prevents the form from reloading the page when submitted
  const formSubmitHandler = (e) => {
    e.preventDefault();
  };

  // This get the value from the input field
  function InputTextHandler(e) {
	      setInputText(e.target.value);
  }
  //   This creates an object with the input field value, sets the completed value to false and generates a unique id for the object
  function SubmitInputHandler() {
    if (inputText === "") {
      return;
    }
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: new Date().getTime() },
    ]);
    // This return the input field back to empty 
    setInputText("");
  }

  

  return (
    <div className="todo-form-box">
      <form className="todo-form" onSubmit={formSubmitHandler}>
        <input
          type="text"
          value={inputText}
          placeholder="Input your todo task here..."
          onChange={InputTextHandler}
          className="todo-description"
        />
        <input
          type="submit"
          value="Add up"
          id="input-btn"
          onClick={SubmitInputHandler}/>

          
      </form>
    </div>
  );
}

export default Form;
