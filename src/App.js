import React, { Component } from "react";
import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newItem: "",
      list: []
    };
  }

  updateInput(key, value) {
    //update react state
    this.setState({
      [key]: value
    });
  }

  addItem() {
    //create item with unique id
    const newIem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
    };

    //copy of current list of items
    const list = [...this.state.list];

    //add new item to list
    list.push(newIem);

    //update stat with new list and reset newItem input
    this.setState({
      list,
      newItem: ""
    });
  }
  deleteItem(id) {
    //copy current list of item
    const list = [...this.state.list];

    //list out itme being deleted
    const updatedList = list.filter(item => item.id !== id);

    this.setState({ list: updatedList });
  }
  render() {
    return (
      <div className="App">
        <div id="title">My To Do List</div>
        <br />
        <div>Add an Item...</div>

        <input
          type="text"
          placeholder="Type item here"
          onChange={e => this.updateInput("newItem", e.target.value)}
        />
        <button
          button
          type="button"
          class="btn btn-primary"
          onClick={() => this.addItem()}
        >
          +
        </button>

        <ul class="list">
          {this.state.list.map(item => {
            return (
              <li key={item.id}>
                {item.value}
                <button onClick={() => this.deleteItem(item.id)}>x</button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
