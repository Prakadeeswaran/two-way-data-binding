import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  state = {
    name: "Prakadees"
  };

  handleChangeState = name => {
    this.setState({
      name: name
    });
  };
  handleChange = event => {
    this.setState({
      name: event.target.value
    });
  };
  render() {
    return (
      <div className="App">
        <button
          onClick={() =>
            this.handleChangeState("This is awsome prakadees by ANNN.")
          }
        >
          Change state using ann function
        </button>
        <button
          onClick={this.handleChangeState.bind(
            this,
            "This is awsome prakadees by BIND."
          )}
        >
          Change state using bind
        </button>

        <h1>{this.state.name}</h1>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.name}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
