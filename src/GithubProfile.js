import React, { Component } from "react";
import "./GithubProfile.css";
import axios from "axios";

export default class GithubProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      imgUrl: "",
      followers: 0,
      following: 0,
      isLoaded: false,
    };
    console.log("Inside Constructor");
  }
  componentDidUpdate;

  async componentDidUpdate() {
    console.log("Inside componentDidMount");
    const url = `https://api.github.com/users/${this.props.username}`;
    const response = await axios.get(url);
    const data = response.data;
    console.log(data);
    setTimeout(() => {
      this.setState({
        name: data.name,
        imgUrl: data.avatar_url,
        followers: data.followers,
        following: data.following,
        isLoaded: true,
      });
    }, 3000);
  }

  render() {
    console.log("Inside render");
    return (
      <div className="GithubProfile">
        {this.state.isLoaded ? (
          <div className="GithubProfile-container">
            <img
              className="GithubProfile-image"
              src={this.state.imgUrl}
              alt={this.state.name}
            />
            <p className="GithubProfile-username">{this.state.name}</p>
            <p>
              <span className="GithubProfile-data">Followers</span>:{" "}
              {this.state.followers}{" "}
              <span className="GithubProfile-divider">|</span>
              <span className="GithubProfile-data">Following</span>:{" "}
              {this.state.following}
            </p>
          </div>
        ) : (
          <div>
            <br />
            <br />
            <br />
            {this.props.username !== "" ? <div className="loader"></div> : ""}
          </div>
        )}
      </div>
    );
  }
}
