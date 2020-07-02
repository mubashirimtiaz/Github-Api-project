import React, { Component } from "react";
import "./GithubProfileForm.css";

export default class GithubProfileForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
    };
  }
  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.addUsername(this.state.username);
    setTimeout(() => {
      this.setState({
        username: "",
      });
    }, 3000);
  };
  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };
  render() {
    return (
      <div className="GithubProfileForm">
        <h2
          style={{
            fontWeight: "300",
            fontSize: "1.8em",
            color: "royalblue",
            textShadow: "1px 1px 3px #000000",
          }}
        >
          GitHub Users
        </h2>

        <form onSubmit={this.handleSubmit} autoComplete="off">
          <label htmlFor="username">Github username</label>
          <input
            type="text"
            value={this.state.username}
            name="username"
            id="username"
            onChange={this.handleChange}
            required={true}
          />
          <button>search</button>
        </form>
      </div>
    );
  }
}
