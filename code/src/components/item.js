import React from "react"
import "./item.css"

class Item extends React.Component {

  handleCheckboxChange = () => {
    this.props.checking(this.props.index)
  }

  deleteTodo = () => {
    this.props.callbackDelete(this.props.index)
  }

  render() {
    return (
      <div className="form-container">
        <form >
          <div className={this.props.done ? "done" : "not-done"}>
            <label className="container">

              <input
                type="checkbox"
                onChange={this.handleCheckboxChange} />
              {this.props.text}
            </label>
          </div>

          <div>
            <button onClick={this.deleteTodo}>Delete</button>
          </div>
        </form>
      </div>
    )
  }

}

export default Item
