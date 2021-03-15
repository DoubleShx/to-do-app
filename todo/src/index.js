import React, { Component } from 'react'
import ReactDom from 'react-dom'
import AppHeader from './components/appHeader/app-header';
import TodoList from './components/todoList/todo-list';
import SearchPanel from './components/searchPanel/search-panel'
import "./index.css"



class App extends Component {
  state = {
    todos: [
      { label: "Drink Coffee", important: false, id: 1 },
      { label: "Make Awesome App", important: true, id: 2 },
      { label: "Have a Lunch", important: false, id: 3}
    ]
  }
  
  
  onDeleted = (id) => {
    this.setState(({todos}) => {
      const idx = todos.findIndex((el) => el.id === id );
      console.log('idx: ' + idx)
      const before = todos.slice(0, idx);
      const after = todos.slice(idx+1)
      const newArray = [...before, ...after]
      console.log(newArray)
      return {
        todos: newArray
      }
    })

    
  }
  render() {
      return ( 
            <div className="fluid">
              <div className="col-10 offset-1">
              <AppHeader header="Todo List"/>
              <SearchPanel />
              <TodoList todos={this.state.todos} onDeleted = { this.onDeleted } />
              </div>
            </div>
      )
      }
  };

ReactDom.render(<App/>, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
