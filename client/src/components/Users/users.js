import React from "react";
import { Route, Link, Switch } from 'react-router-dom';
import * as ReactBootstrap from 'react-bootstrap';
import $ from 'jquery';
import Navigation from '../Navigation/navigation';

import './users.scss';

const Account = e => {
    return (
        <div class="information">
            <div class="container">
                <div class="row">
                    <div class="col-xs-5 col-md-3">
                        <div class="userinfo pull-right">
                            <div class="propic"></div>
                            <br />
                            <div class="proinfo">
                                <p>Name:sefsefs </p>
                                <p>About: sefsefe</p>
                                <p>Location: sefse</p>
                                <p>Interests: sefse</p>
                                <p>Facebook: sefsef</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-10 col-md-6 pull-left">
                        <div class="compinfo">
                            <div class="comphead">
                                <h3>Account Summary</h3>
                            </div>
                            <div>

                            </div>
                        </div>
                    </div>
                    <div class="col-xs-3 col-md-3 pull-right">
                        <div class="cal">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Matches = ({ match }) => {
    return (
        <div class="information">
            <div class="container">
                <div class="row">
                    <div class="col-xs-5 col-md-3">
                        <div class="userinfo pull-right">
                            <div class="propic"></div>
                            <br />
                            <div class="proinfo">
                                <p>Name:sefsefs </p>
                                <p>About: sefsefe</p>
                                <p>Location: sefse</p>
                                <p>Interests: sefse</p>
                                <p>Facebook: sefsef</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-10 col-md-6 pull-left">
                        <div class="compinfo">
                            <div class="comphead">
                                <h3>Matches</h3>
                            </div>
                            <div>

                            </div>
                        </div>
                    </div>
                    <div class="col-xs-3 col-md-3 pull-right">
                        <div class="cal">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Friends = ({ friend }) => {
    return (
        <div class="information">
            <div class="container">
                <div class="row">
                    <div class="col-xs-5 col-md-3">
                        <div class="userinfo pull-right">
                            <div class="propic"></div>
                            <br />
                            <div class="proinfo">
                                <p>Name:sefsefs </p>
                                <p>About: sefsefe</p>
                                <p>Location: sefse</p>
                                <p>Interests: sefse</p>
                                <p>Facebook: sefsef</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-10 col-md-6 pull-left">
                        <div class="compinfo">
                            <div class="comphead">
                                <h3>Friends</h3>
                            </div>
                            <div>

                            </div>
                        </div>
                    </div>
                    <div class="col-xs-3 col-md-3 pull-right">
                        <div class="cal">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Chatroom = ({ chat }) => {
    return (
        <div class="information">
            <div class="container">
                <div class="row">
                    <div class="col-xs-5 col-md-3">
                        <div class="userinfo pull-right">
                            <div class="propic"></div>
                            <br />
                            <div class="proinfo">
                                <p>Name:sefsefs </p>
                                <p>About: sefsefe</p>
                                <p>Location: sefse</p>
                                <p>Interests: sefse</p>
                                <p>Facebook: sefsef</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-10 col-md-6 pull-left">
                        <div class="compinfo">
                            <div class="comphead">
                                <h3>Chatroom</h3>
                            </div>
                            <div>

                            </div>
                        </div>
                    </div>
                    <div class="col-xs-3 col-md-3 pull-right">
                        <div class="cal">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Settings = e => {
    return (
        <div class="information">
            <div class="container">
                <div class="row">
                    <div class="col-xs-5 col-md-3">
                        <div class="userinfo pull-right">
                            <div class="propic"></div>
                            <br />
                            <div class="proinfo">
                                <p>Name:sefsefs </p>
                                <p>About: sefsefe</p>
                                <p>Location: sefse</p>
                                <p>Interests: sefse</p>
                                <p>Facebook: sefsef</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-10 col-md-6 pull-left">
                        <div class="compinfo">
                            <div class="comphead">
                                <h3>Settings</h3>
                            </div>
                            <div>

                            </div>
                        </div>
                    </div>
                    <div class="col-xs-3 col-md-3 pull-right">
                        <div class="cal">
                        </div>
                    </div>
                </div>
            </div>
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

    componentDidMount() {
        $(document).ready(function () {
            $("#sidebarCollapse").on("click", function () {
                $("#sidebar").toggleClass("active");
                $(this).toggleClass("active");
                $("#sidebar").trigger('click')
            });
        });
        $(document).ready(function () {
            $("#sidebarCollapse").click(function () {
                $(".cal").toggle();
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
                            <p>Welcome User</p>
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

                    </div>
                </div>
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