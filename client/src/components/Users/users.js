import React from "react";
import { Route, Link, Switch } from 'react-router-dom';
import * as ReactBootstrap from 'react-bootstrap';
import $ from 'jquery';
import Navigation from '../Navigation/navigation';

import './users.scss';

const Account = e => {
    return (
        <div>
            <h1> Account Info</h1>
        </div>
    );
};

const Matches = ({ match }) => {
    return (
        <div>
            <h1> Matches</h1>
        </div>
    );
};

const Friends = ({ friend }) => {
    return (
        <div>
            <h1>Friends</h1>
        </div>
    );
};

const Chatroom = ({ chat }) => {
    return (
        <div>
            <h1>Chatroom</h1>
        </div>
    );
};

const Settings = e => {
    return (
        <div>
            <h1>Settings</h1>
        </div>
    );
};



class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: "",
            name: "",
            profile: ""
        };
    }

    componentWillMount() {
        $(document).ready(function () {
            $("#sidebarCollapse").on("click", function () {
                $("#sidebar").toggleClass("active");
                $(this).toggleClass("active");
            });
        });
    }

    handleLogout = () => {
        // Api.getLogout();
        // console.log("You have logout!");
    };

    renderUserProfile = () => {
        return (
            <div id="users">
                <div class="wrapper">
                    <nav id="sidebar">
                        <div class="sidebar-header">
                            <h3><Link to={'/'}><a>Linests</a></Link></h3>
                        </div>

                        <ul class="list-unstyled components">
                            <li><Link to={'/userprofile/account'}><a>Account</a></Link></li>
                            <li><Link to={'/userprofile/matches'}><a>Matches</a></Link></li>
                            <li><Link to={'/userprofile/friends'}><a>Friends</a></Link></li>
                            <li><Link to={'/userprofile/settings'}><a>Settings</a></Link></li>
                            <li><Link to={'/logout'}><a>Log Out</a></Link></li>
                        </ul>
                    </nav>
                    <div id="content">
                        <nav class="navbar navbar-default">
                            <div class="container-fluid">
                                <div class="navbar-header">
                                    <button type="button" id="sidebarCollapse" class="navbar-btn">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </button>
                                </div>
                            </div>
                        </nav>
                        <div class="profile">
                        </div>

                    </div>
                </div>
                <Route
                    exact
                    path="/userprofile/account"
                    component={() => <Account />}
                />
                <Route
                    exact
                    path="/userprofile/matches"
                    component={() => <Matches />}
                />
                <Route
                    exact
                    path="/userprofile/friends"
                    component={() => <Friends friend={this.state.name} />}
                />
                <Route
                    exact
                    path="/userprofile/chatroom"
                    component={() => <Chatroom />}
                />
                <Route
                    exact
                    path="/userprofile/settings"
                    component={() => <Settings />}
                />
            </div>
        );
    };

    render() {
        return (
            <div>
                <Switch>
                    <Route path="/userprofile" render={this.renderUserProfile} />
                </Switch>
            </div>
        );
    }
}

export default Users;