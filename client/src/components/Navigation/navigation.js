import React from "react";
import { Route, Link, Switch } from 'react-router-dom';
import $ from 'jquery';
import * as ReactBootstrap from 'react-bootstrap';
import Logo from '../Images/ColorLogo.png'

import './navigation.scss';

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: true
        }
    }
    componentDidMount() {
        $(document).ready(function () {
            $('.nav li a').click(function (e) {
                $('.nav li.active').removeClass('active');
                var $parent = $(this).parent();
                $parent.addClass('active');
            });
        });
    }

    render() {
        const { isLoggedIn } = this.state;
        return (
            <div>
                <div class="navbar navbar-default navbar-fixed-top">
                    <div class="navbar-header"><Link to={'/'}> <img class="navbar-brand" src={Logo} alt="logo" /> <a class="navbar-brand logofont">Linests</a></Link>
                        <a class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </a>
                    </div>
                    {isLoggedIn ?
                        <div class="navbar-collapse collapse">
                            <ul class="nav navbar-nav pull-right">
                                <li class="dropdown">
                                    <a class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Account <span class="caret"></span></a>
                                    <ul class="dropdown-menu">
                                        <li><Link to={'/userprofile/account'}><a>Summary</a></Link></li>
                                        <li><Link to={'/userprofile/matches'}><a>Matches</a></Link></li>
                                        <li><Link to={'/userprofile/friends'}><a>Friends</a></Link></li>
                                        <li><Link to={'/userprofile/settings'}><a>Settings</a></Link></li>
                                    </ul>
                                </li>
                                <li><Link to={'/logout'}><a>Log Out</a></Link></li>
                            </ul>
                        </div>
                        :
                        <div class="navbar-collapse collapse">
                            <ul class="nav navbar-nav pull-right">
                                <li><Link to={'/signup'}><a>Sign Up</a></Link></li>
                                <li><Link to={'/login'}><a>Log In</a></Link></li>
                            </ul>
                        </div>
                    }
                </div>
            </div>
        )
    }
}

export default Navigation;