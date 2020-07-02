import React, { Component } from "react";
import GithubProfile from "./GithubProfile";
import GithubProfileForm from "./GithubProfileForm";

export default class GithubProfileList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
    };
  }
  addUsername = (newusername) => {
    this.setState({
      username: newusername,
    });
  };
  render() {
    console.log(this.state.username);
    return (
      <div>
        <GithubProfileForm addUsername={this.addUsername} />

        <GithubProfile username={this.state.username} />
      </div>
    );
  }
}
