import React from "react";
import { Route, Link, Switch } from 'react-router-dom';
import * as ReactBootstrap from 'react-bootstrap';
import $ from 'jquery';
import Navigation from '../Navigation/navigation';
import './signup.scss';
import axios from "axios";
import swal from 'sweetalert'

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: "",
            lastname: "",
            gender: "",
            education: "",
            about: "",
            username: "",
            password: "",
            cpassword: "",
            months: "",
            dates: "",
            years: "",
            address: "",
            city: "",
            state: "",
            zipcode: "",
            userData: "",
            message: ""
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

    handleEducation = e => {
        this.setState({
            education: e.target.value
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

    handleGenderChange = e => {
        this.setState({
            gender: e.target.value
        });
    };
    handleMonthChange = e => {
        this.setState({
            months: e.target.value
        });
    };
    handleDateChange = e => {
        this.setState({
            dates: e.target.value
        });
    };
    handleYearChange = e => {
        this.setState({
            years: e.target.value
        });
    };

    submitForm = e => {
        e.preventDefault();
        const { username, password, cpassword, firstname, lastname, about, gender, education, months, dates, years, address, city, state, zipcode, message } = this.state;
        if (password === cpassword) {
            axios
                .post("/auth/new", {
                    username: username,
                    first_name: firstname,
                    last_name: lastname,
                    password: password,
                    about: about,
                    gender: gender,
                    education: education,
                    birthmonth: months,
                    birthdate: dates,
                    birthyear: years,
                    address_line: address,
                    city: city,
                    state: state,
                    zip_code: zipcode
                })
                .then(res => {
                    this.setState({
                        userData: res.data,
                        firstname: "",
                        lastname: "",
                        username: "",
                        password: "",
                        about: "",
                        gender: "",
                        education: "",
                        months: "",
                        dates: "",
                        years: "",
                        address: "",
                        city: "",
                        state: "",
                        zipcode: "",
                        message: ""
                    });
                    swal({
                        title: "Congralutions!",
                        icon: "success",
                        text: "You have successfully registered. Please log in to your account!"
                    });
                })
                .catch(err => {
                    this.setState({
                        firstname: "",
                        lastname: "",
                        username: "",
                        password: "",
                        about: "",
                        gender: "",
                        education: "",
                        months: "",
                        dates: "",
                        years: "",
                        address: "",
                        city: "",
                        state: "",
                        zip_code: "",
                        message: "Please Make Sure That You Filled All Information "
                    });
                });
        }
        else {
            this.setState({
                message: "Passwords Do Not Match"
            })
        }
    }

    render() {
        const { firstname, lastname, about, education, username, password, cpassword, months, years, dates, address, city, state, zipcode, message } = this.state;
        let gender = ["Select Gender", "Female", "Male"];
        const monthslist = ["Birth Month", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
        const dateslist = ["Birth Day", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
        const yearslist = ["Birth Year", 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018];
        return (
            <div>
                <Navigation isLoggedIn={this.props.isLoggedIn} />
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
                                        <select onChange={this.handleGenderChange}>
                                            {gender.map(gender => <option value={gender}>{gender}</option>)}
                                        </select>
                                    </label>
                                    <br />
                                    <label>
                                        <textarea type="text" name="about" placeholder="Tell Us About Yourself" value={about} onChange={this.handleAbout} />
                                    </label>
                                    <br />
                                    <label>
                                        <input type="text" name="education" placeholder="Education (school)" value={education} onChange={this.handleEducation} />
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
                                    <label id="birthday">
                                        <select onChange={this.handleMonthChange}>
                                            {monthslist.map(month => <option value={month}>{month}</option>)}
                                        </select>
                                        <select onChange={this.handleDateChange}>
                                            {dateslist.map(date => <option value={date}>{date}</option>)}
                                        </select>
                                        <select onChange={this.handleYearChange}>
                                            {yearslist.map(year => <option value={year}>{year}</option>)}
                                        </select>
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
                            <p>{message}</p>
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