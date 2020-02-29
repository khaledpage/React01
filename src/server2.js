import React, { Component } from "react";

class Server2 extends Component {
  mul = function() {
    return this.props.value * 5;
  };
  render() {
    return <h1>{this.mul()}</h1>;
  }
}
export default Server2;
