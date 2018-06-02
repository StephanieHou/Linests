import React from "react";
import { Route, Link, Switch } from 'react-router-dom';
import * as ReactBootstrap from 'react-bootstrap';
import $ from 'jquery';
import Test from '../Images/Gaming.jpeg'

import './friendlist.scss';


const Friendlist = ({ friends, getChat, userid }) => {
    console.log("FRIENDS: ", friends);
    return (
        <div>
            {friends.map(friend => (
                <div class="frienddiv">
                    <div class="container">
                        <div class="row">
                            <div class="col-xs-4 col-md-1" id="fimg">
                                <img src={Test} alt="Friend" border="0" />
                            </div>
                            <div class="col-xs-5 col-md-3">
                                <h4>
                                    {friend.first_name} {friend.last_name}
                                </h4>
                                <p>Age: {2018 - friend.birthyear}</p>
                                <p>Location: {friend.city}, {friend.state}</p>
                            </div>
                            <div class="col-xs-2 col-md-1" id="chatlink">
                                <Link to={`/userprofile/chatroom`}><button type="submit" onClick={() => { getChat(userid, friend.user_id) }}>Chat</button> </Link>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Friendlist;