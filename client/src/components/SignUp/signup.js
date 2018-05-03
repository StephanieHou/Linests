import React from "react";
import { Route, Link, Switch } from 'react-router-dom';
import * as ReactBootstrap from 'react-bootstrap';

import './signup.scss';

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    };

    render() {
        return (
            <div>
                <h1>Signup</h1>
            </div>
        )
    }
}

export default Signup;