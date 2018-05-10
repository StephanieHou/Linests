import React from "react";
import { Route, Link, Switch } from 'react-router-dom';
import Navigation from '../Navigation/navigation';

import './contact.scss';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            issue: "",
            comments: ""
        }
    };
    handleIssue = e => {
        this.setState({
            issue: e.target.value
        });
    };

    handleEmail = e => {
        this.setState({
            username: e.target.value
        });
    };

    handleComments = e => {
        this.setState({
            comments: e.target.value
        });
    };

    submitForm = e => {
        e.preventDefault();
    }

    render() {
        const { username, issue, comments } = this.state;
        return (
            <div>
                <Navigation />
                <div class="contact">
                    <div id="cform">
                        <div>
                            <h1>Contact Us</h1>
                            <p>Please Let Us Know If You Have Any Issues</p>
                            <form onSubmit={this.submitForm}>
                                <div id="formstyle">
                                    <label>
                                        <input type="text" name="username" placeholder="Email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" title="Please give a valid username" value={username} onChange={this.handleEmail} />
                                    </label>
                                    <br />
                                    <label>
                                        <input type="text" name="issue" placeholder="Type Of Issue" value={issue} onChange={this.handleIssue} />
                                    </label>
                                    <br />
                                    <label>
                                        <textarea type="text" name="comments" placeholder="Comments" value={comments} onChange={this.handleComments} />
                                    </label>
                                </div>
                                <br />
                                <input type="submit" value="Submit" />
                            </form>
                        </div>
                    </div>
                </div>
                <ul class="bg-bubbles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        )
    }
}

export default Contact;