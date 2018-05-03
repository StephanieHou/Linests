import React from "react";
import { Route, Link, Switch } from 'react-router-dom';
import $ from 'jquery';
import * as ReactBootstrap from 'react-bootstrap';

import './navigation.scss';

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentDidMount() {
        $(document).ready(function () {
            $('.nav li a').click(function (e) {

                $('.nav li.active').removeClass('active');

                var $parent = $(this).parent();
                $parent.addClass('active');
                // e.preventDefault();
            });
        });
    }

    render() {
        return (
            <div>
                <div class="navbar navbar-default navbar-fixed-top">
                    <div class="navbar-header"><a class="navbar-brand" href="#">Linests</a>
                        <a class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </a>
                    </div>
                    <div class="navbar-collapse collapse">
                        <ul class="nav navbar-nav pull-right">
                            <li><Link to={'/signup'}><a>Sign Up</a></Link></li>
                            <li><Link to={'/login'}><a>Log In</a></Link></li>
                        </ul>
                    </div>
                </div>


            </div>
        )
    }
}

export default Navigation;