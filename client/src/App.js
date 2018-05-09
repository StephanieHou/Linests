import React, { Component } from 'react';
import { Route, Link, Switch } from "react-router-dom";
import './App.scss';
import Home from "./components/Home/home";
import Contact from "./components/Contact/contact";
import Login from "./components/LogIn/login";
import Navigation from "./components/Navigation/navigation";
import Signup from "./components/SignUp/signup";
import Users from "./components/Users/users";
import * as ReactBootstrap from 'react-bootstrap';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,

    };
  }
  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 2000);
  }

  render() {
    const { loading } = this.state;
    if (loading) {
      return (
        <div class="loading">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="150" height="150">
            <defs>
              <clipPath id="_clipPath_9IPO3QYpV40H7H1u4Tmo2unGvHMzYNDP">
                <rect width="500" height="500" />
              </clipPath>
            </defs>
            <g id="loadlogo" clip-path="url(#_clipPath_9IPO3QYpV40H7H1u4Tmo2unGvHMzYNDP)">
              <rect width="500" height="500" fill="none" />
              <path d=" M 384 119 C 215 122.667 126.657 211.01 119 384 M 384 119 C 239 144 150.657 232.343 119 384" fill-rule="evenodd" fill="rgb(106,197,242)" />
              <path d=" M 119 119 C 288 122.667 376.343 211.01 384 384 M 119 119 C 264 144 352.343 232.343 384 384" fill-rule="evenodd" fill="rgb(255,81,162)" />
              <path d=" M 119 384 C 288 380.333 376.343 291.99 384 119 M 119 384 C 264 359 352.343 270.657 384 119" fill-rule="evenodd" fill="rgb(255,81,162)" />
              <path d=" M 384 384 C 215 380.333 126.657 291.99 119 119 M 384 384 C 239 359 150.657 270.657 119 119" fill-rule="evenodd" fill="rgb(106,197,242)" />
              <path d=" M 62.629 251.5 C 183.398 133.224 308.326 131.816 437.371 247.278 M 62.629 251.5 C 181.873 165.298 306.802 163.891 437.371 247.278" fill-rule="evenodd" fill="rgb(228,193,249)" />
              <path d=" M 62.628 255.624 C 185.97 371.214 310.899 369.872 437.372 251.598 M 62.628 255.624 C 183.74 339.18 308.669 337.838 437.372 251.598" fill-rule="evenodd" fill="rgb(228,193,249)" />
              <path d=" M 249.977 438.894 C 131.701 318.125 130.293 193.197 245.755 64.152 M 249.977 438.894 C 163.775 319.65 162.368 194.721 245.755 64.152" fill-rule="evenodd" fill="rgb(255,81,162)" />
              <path d=" M 254.101 438.895 C 369.691 315.553 368.349 190.624 250.075 64.15 M 254.101 438.895 C 337.657 317.783 336.315 192.854 250.075 64.15" fill-rule="evenodd" fill="rgb(106,197,242)" />
            </g>
          </svg>
          <p>Loading</p>
        </div>
      )
    }

    return (
      <div>
        <Route exact path="/" render={props => (<Home />)} />
        <Route exact path="/login" render={props => (<Login />)} />
        <Route exact path="/signup" render={props => (<Signup />)} />
        <Route exact path="/contact" render={props => (<Contact />)} />
        <Route path="/userprofile" render={props => (<Users />)} />
      </div>
    );
  }
}

export default App;

