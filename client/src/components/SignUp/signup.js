import React from "react";
import { Route, Link, Switch } from 'react-router-dom';
import * as ReactBootstrap from 'react-bootstrap';
import $ from 'jquery';
import Navigation from '../Navigation/navigation';
import './signup.scss';

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: "",
            lastname: "",
            about: "",
            username: "",
            password: "",
            cpassword: "",
            birthday: "",
            address: "",
            city: "",
            state: "",
            zipcode: ""
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
    handleFname = e => {
        this.setState({
            firstname: e.target.value
        });
    };
    handleLname = e => {
        this.setState({
            lastname: e.target.value
        });
    };
    handleAbout = e => {
        this.setState({
            about: e.target.value
        });
    };

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

    handleCPassword = e => {
        this.setState({
            cpassword: e.target.value
        });
    };

    handleBirthday = e => {
        this.setState({
            birthday: e.target.value
        });
    };

    handleAddress = e => {
        this.setState({
            address: e.target.value
        });
    };

    handleCity = e => {
        this.setState({
            city: e.target.value
        });
    };

    handleState = e => {
        this.setState({
            state: e.target.value
        });
    };

    handleZipcode = e => {
        this.setState({
            zipcode: e.target.value
        });
    };

    submitForm = e => {
        e.preventDefault();
    }

    render() {
        const { firstname, lastname, about, username, password, cpassword, birthday, address, city, state, zipcode } = this.state;
        return (
            <div>
                <Navigation />
                <div class="signup">
                    <div id="signform">
                        <div>
                            <h1>Sign Up</h1>
                            <p>Please Fill Out All Information</p>
                            <form onSubmit={this.submitForm}>
                                <div id="formstyle">
                                    <label>
                                        <input type="text" name="firstname" placeholder="First Name" value={firstname} onChange={this.handleFname} />
                                    </label>
                                    <br />
                                    <label>
                                        <input type="text" name="lastname" placeholder="Last Name" value={lastname} onChange={this.handleLname} />
                                    </label>
                                    <br />
                                    <label>
                                        <input type="text" name="about" placeholder="Tell Us About Yourself" value={about} onChange={this.handleAbout} />
                                    </label>
                                    <br />
                                    <label>
                                        <input type="text" name="username" placeholder="Email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" title="Please give a valid username" value={username} onChange={this.handleEmail} />
                                    </label>
                                    <br />
                                    <label>
                                        <input type="password" name="password" placeholder="Password" pattern=".{8,}" title="Eight or more characters" value={password} onChange={this.handlePassword} />
                                    </label>
                                    <br />
                                    <label>
                                        <input type="password" name="cpassword" placeholder="Confirm Password" pattern=".{8,}" title="Eight or more characters" value={cpassword} onChange={this.handleCPassword} />
                                    </label>
                                    <br />
                                    <label>
                                        <input type="text" name="birthday" placeholder="Birthday" value={birthday} onChange={this.handleBirthday} />
                                    </label>
                                    <br />
                                    <label>
                                        <input type="text" name="address" placeholder="Address" value={address} onChange={this.handleAddress} />
                                    </label>
                                    <br />
                                    <label>
                                        <input type="text" name="city" placeholder="City" value={city} onChange={this.handleCity} />
                                    </label>
                                    <br />
                                    <label>
                                        <input type="text" name="state" placeholder="State" value={state} onChange={this.handleState} />
                                    </label>
                                    <br />
                                    <label>
                                        <input type="text" name="zipcode" placeholder="Zip Code" value={zipcode} onChange={this.handleZipcode} />
                                    </label>
                                </div>
                                <br />
                                <input type="submit" value="Submit" />
                            </form>
                            <br />
                            <Link to={`/login`}>
                                <a>Already A User? Log In Here</a>
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

export default Signup;