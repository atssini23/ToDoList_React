import React, { Component } from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

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
      newItem: "",
      backgroundcolor: ""
    });
  }
  deleteItem(id) {
    //copy current list of item
    const list = [...this.state.list];

    //list out itme being deleted
    const updatedList = list.filter((item) => item.id !== id);

    this.setState({ list: updatedList });
  }
  completeItem(setState) {
    const list = [...this.state.list];

    const completedList = list.filter((item) => item.setState !== setState);

    this.setState({ list: completedList, backgroundcolor: "#FF0000" });
  }

  render() {
    return (
      <div className="Apps">
        <div id="app-title">
          todo<b>list</b>
        </div>
        <br />

        <div id="contain">
          <br />
          <div>Add an Item...</div>

          <input
            type="text"
            placeholder="Type item here"
            value={this.state.newItem} //deletes placeholder when new item is added
            onChange={(e) => this.updateInput("newItem", e.target.value)}
          />
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => this.addItem()}
          >
            +
          </button>

          <ul id="list">
            {this.state.list.map((item) => {
              return (
                <li key={item.id}>
                  {item.value}
                  <button
                    type="button"
                    id="colorChangeOnClick"
                    className="btn btn-success"
                    onClick={() => this.completeItem(item.id)}
                  >
                    &#x2713;
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => this.deleteItem(item.id)}
                  >
                    &#xff38;
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
