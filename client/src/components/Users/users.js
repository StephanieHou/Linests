import React from "react";
import { Route, Link, Switch } from 'react-router-dom';
import * as ReactBootstrap from 'react-bootstrap';

import './users.scss';

class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    };

    render() {
        return (
            <div>
                <h1>Users</h1>
            </div>
        )
    }
}

export default Users;