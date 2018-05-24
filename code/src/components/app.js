import React from "react"
import Form from "./form"
import Item from "./item"

import "./app.css"

class App extends React.Component {

  constructor(props) {
    const todoList = JSON.parse(localStorage.getItem("list-saved-on-browser"))

    super(props)
    if (todoList) {
      this.state = {
        items: todoList
      }
    } else {
      this.state = {
        items: [
          { id: 1, done: false, text: "wash" },
          { id: 2, done: false, text: "clean" }
        ]
      }
    }
  }

  handleNewToDo = (text) => {
    const toDos = this.state.items
    toDos.push({ id: Date.now(), done: false, text: text })
    localStorage.setItem("list-saved-on-browser", JSON.stringify(toDos))
    this.setState({
      items: toDos
    })
  }

  handelDelete = (index) => {
    const toDos = this.state.items
    toDos.splice(index, 1)
    this.setState({
      items: toDos
    })
  }

  handleChecking = (index) => {
    const toDoList = this.state.items  //saves the satate in to a variable
    const toDoItemToUpdate = toDoList[index]  //saves the value (the value is a object)of index in to a variable
    toDoItemToUpdate.done = !toDoItemToUpdate.done  // changes the value of the object Done, to true or false. And atomatic toDoList is also updating ist value of the object with the [index] to true or false

    this.setState({
      items: toDoList
    })
  }

  render() {
    return (
        <div className="container">
          <h1>Your Todo List</h1>
          <Form addToList={this.handleNewToDo} />
          {this.state.items.map((listItem, index) => (
            <Item
              index={index}
              key={listItem.id}
              text={listItem.text}
              done={listItem.done}
              checking={this.handleChecking}
              callbackDelete={this.handelDelete} />
          ))}
        </div>
    )
  }

}

export default App
