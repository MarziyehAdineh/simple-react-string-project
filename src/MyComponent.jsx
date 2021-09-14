import React, { Component } from "react";
import "./styleComponent.css";
export default class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { str: ""};
  }
  handleChange = (e) => {
    this.setState({ str: e.target.value });
  };
  
  render() {
    return (
      <div className="mainContainer">
        <input
          className="inputStyle"
          style={{ borderwidth: 1, margin: 10 }}
          placeholder="متن"
          onChange={this.handleChange}
        />
        <input
          className="inputStyle"
          style={{ borderwidth: 1, margin: 10 }}
          placeholder="معکوس متن"
          value={this.state.str.split("").reverse().join("")}
        />
        <label className="outStyle">طول 22رشته: {this.state.str.length}</label>
      </div>
    );
  }
}
