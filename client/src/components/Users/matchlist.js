import React from "react";
import { Route, Link, Switch } from 'react-router-dom';
import * as ReactBootstrap from 'react-bootstrap';
import $ from 'jquery';
import Test from '../Images/Gaming.jpeg'

import './matchlist.scss';


const Matchlist = ({ matches }) => {
    console.log("MATCHS: ", matches);
    return (
        <div>
            {matches.map(match => (
                <div class="frienddiv">
                    <div class="container">
                        <div class="row">
                            <div class="col-xs-4 col-md-1" id="fimg">
                                <img src={Test} alt="Friend" border="0" />
                            </div>
                            <div class="col-xs-5 col-md-3">
                                <h4>
                                    {match.first_name} {match.last_name}
                                </h4>
                                <p>{match.about}</p>
                                <p>Age: {2018 - match.birthyear}</p>
                                <p>Location: {match.city}, {match.state} </p>
                                <p>Education: {match.education}</p>
                            </div>
                            <div class="col-xs-2 col-md-1" id="chatlink">
                                <Link to={`/userprofile/chatroom`}><a>Chat</a> </Link>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Matchlist;