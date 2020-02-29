import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import Server2 from "./server2";
class Server1 extends Component {
  constructor() {
    super();
    this.state = { result: <Server2 value={this.clac()} /> };
  }
  clac = e => {
    if (e) {
      this.setState({ result: <Server2 value={Number(e.target.value)} /> });
    }
  };
  render() {
    return (
      <Fragment>
        <div className="input">
          <input id="inputnumber" onChange={this.clac}></input>
          {this.state.result}
        </div>
      </Fragment>
    );
  }
}
ReactDOM.render(<Server1 />, document.getElementById("root"));
serviceWorker.unregister();
