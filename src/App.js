import React , { Component} from 'react';
import './App.css';

function Task(props){
  const todo = props.todo;
  const index = props.index;
  const completeTask = props.completeTask;
  return(
    <li >
            {todo.text} 
            <button onClick={()=>{completeTask(index)}}>Done</button>
  </li>
  );
  
}
class App extends Component {
  state = {
    newTask: "",
    todos : [
      
    ]
  }
  completeTask = (index)=>{
    const todos = [...this.state.todos]
    todos.splice(index,1);
    this.setState({
      todos
    });
  }
  updateNewTask = (event)=>{
    this.setState({
      newTask : event.target.value
    });
  }
  addTask = ()=> {
    const todos = [...this.state.todos];
    todos.push({
      text: this.state.newTask
    });
    this.setState({
      todos
    });
  }



  render(){
    
    return (
      <div className="App">
        <h2>Smart Todo App</h2>
        <input value={this.state.newTask} onChange={this.updateNewTask}/>
        <button className="Add_button" onClick={this.addTask}>Add Task</button>
        {
          this.state.todos.map((todo , index) => <Task todo={todo} completeTask={() => this.completeTask(index)} key={index}/>
          )
        }
        
      </div>

    );
  }
}
export default App;
