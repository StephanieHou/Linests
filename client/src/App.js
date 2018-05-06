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
    setTimeout(() => this.setState({ loading: false }), 1500);
  }

  render() {
    const { loading } = this.state;
    if (loading) {
      return (
        <div class="loading">Loading</div>
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

