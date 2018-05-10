import React from "react";
import { Route, Link, Switch } from 'react-router-dom';
import * as ReactBootstrap from 'react-bootstrap';
import $ from 'jquery';
import Navigation from '../Navigation/navigation';

import './login.scss';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
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
    }

    render() {
        const { username, password } = this.state;
        return (
            <div>
                <Navigation />
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

export default Login;