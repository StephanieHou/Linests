import React from "react";
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import * as ReactBootstrap from 'react-bootstrap';
import $ from 'jquery';
import axios from "axios";
import Navigation from '../Navigation/navigation';

import './login.scss';
import Api from "../Api/Api";
import swal from 'sweetalert'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            message: "",
            userData: ""
        }
    };
    componentDidMount() {
        var strength1 = 50;
        var strength2 = 100;
        var strength3 = 200;
        $("html").mousemove(function (e) {
            var pageX = e.pageX - ($(window).width() / 2);
            var pageY = e.pageY - ($(window).height() / 2);
            $('#background').css("background-position", (strength1 / $(window).width() * pageX * -1) + "px " + (strength1 / $(window).height() * pageY * -1) + "px");
            $('#middleground').css("background-position", (strength2 / $(window).width() * pageX * -1) + "px " + (strength2 / $(window).height() * pageY * -1) + "px");
            $('#foreground').css("background-position", (strength3 / $(window).width() * pageX * -1) + "px " + (strength3 / $(window).height() * pageY * -1) + "px");
        });
    }
    handleEmail = e => {
        this.setState({
            username: e.target.value
        });
    };

    handlePassword = e => {
        this.setState({
            password: e.target.value
        });
    };

    submitForm = e => {
        e.preventDefault();
        const { username, password, isLoggedIn, message, userData } = this.state;
        var newuser = username.replace(/"/g, "'");
        console.log(username)
        console.log(userData)
        console.log(message)

        axios
            .post("/auth/login", {
                username: username,
                password: password,
            })
            .then(res => {
                console.log("logged in: ", res);
                console.log("data : ", res.data);
                this.props.handleLogin(username);
                this.props.handleUserInfo(username);
                this.setState({
                    userData: res.data,
                    username: "",
                    password: "",
                    message: "Logged In User"
                });
                swal({
                    title: "Welcome Linester!",
                    text: "We are ready to match you."
                });
            })
            .catch(err => {
                this.setState({
                    username: "",
                    password: "",
                    message: "Email / password is not registered"
                });
            });
    }

    render() {
        const { username, password, message } = this.state;
        if (message === "Logged In User") {
            return <Redirect to={'/userprofile/account'} />;
        }
        else {
            return (
                <div>
                    <Navigation isLoggedIn={this.props.isLoggedIn} />
                    <div class="login">
                        <div id="logform">
                            <div>
                                <h1> Log In </h1>
                                <form onSubmit={this.submitForm}>
                                    <div id="formstyle">
                                        <label>
                                            <input type="text" name="username" placeholder="Email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" title="Please give a valid username" value={username} onChange={this.handleEmail} />
                                        </label>
                                        <br />
                                        <label>
                                            <input type="password" name="password" placeholder="Password" pattern=".{8,}" title="Eight or more characters" value={password} onChange={this.handlePassword} />
                                        </label>
                                    </div>
                                    <input type="submit" value="Submit" />
                                </form>
                                <br />
                                <Link to={`/signup`}>
                                    <a>New User? Sign Up Here</a>
                                </Link>
                                <p>{this.state.message}</p>
                            </div>
                        </div>
                        <div id="background">
                        </div>
                        <div id="middleground">
                        </div>
                        <div id="foreground">
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default Login;