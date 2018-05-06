import React from "react";
import { Route, Link, Switch } from 'react-router-dom';
import Navigation from '../Navigation/navigation';

import './contact.scss';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    };

    render() {
        return (
            <div>
                <Navigation />
                <div class="contact">
                    <div>
                        <h1>Contact</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;