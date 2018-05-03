import React from "react";
import { Route, Link, Switch } from 'react-router-dom';
import Navigation from '../Navigation/navigation';
import * as ReactBootstrap from 'react-bootstrap';

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
                    <h1>Home</h1>
                </div>
                <div class="parallax1">
                    <h1>Second</h1>
                </div>
                <div class="parallax">
                    <h1>Third</h1>
                </div>
                <div class="parallax1">
                    <h1>Fourth</h1>
                </div>
            </div>
        )
    }
}

export default Home;