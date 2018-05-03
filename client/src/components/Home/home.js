import React from "react";
import { Route, Link, Switch } from 'react-router-dom';
import Navigation from '../Navigation/navigation';
import * as ReactBootstrap from 'react-bootstrap';
import $ from 'jquery';

import './home.scss';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    };


    render() {
        return (
            <div>
                <Navigation />
                <div class="parallax">
                    <h1>Linests</h1>
                </div>
                <div class="parallax1">
                    <div id="about">
                        <h1>Our Story</h1>
                    </div>
                </div>
                <div class="parallax2">
                </div>
                <div class="parallax3">
                    <h1>How It Works</h1>
                </div>
                <div class="parallax4">
                    <h1>Join Today!</h1>
                </div>
                <div class="parallax5">
                    <h1>Contact Us</h1>
                </div>
                <div class="footer">
                </div>
            </div>
        )
    }
}

export default Home;