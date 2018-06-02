import React from "react";
import { Route, Link, Switch } from 'react-router-dom';
import * as ReactBootstrap from 'react-bootstrap';
import $ from 'jquery';

import './chatroom.scss';


const Chatroom = ({ messages, addMessages, userid, newmessage, handleMessageInput, otherid }) => {
    console.log("Chat: ", messages);
    console.log(userid)
    return (
        <div class="chatroom">
            <div>
                {messages.map(message => (
                    <div>
                        {
                            userid !== message.user_id ?
                                <div class="otheruser">
                                    <div class="container">
                                        <div class="row">
                                            <p>{message.messages}</p>
                                        </div>
                                    </div>
                                </div>
                                :
                                <div class="loggeduser">
                                    <div class="container">
                                        <div class="row">
                                            <p>{message.messages}</p>
                                        </div>
                                    </div>
                                </div>
                        }
                    </div>
                )
                )}
            </div>
            <div class="chatinput">
                <label>
                    <input type="text" placeholder="Enter text" value={newmessage} onChange={handleMessageInput}></input>
                    <button type="submit" onClick={() => { addMessages(otherid) }}>Enter</button>
                </label>
            </div>
        </div>
    )
};

export default Chatroom;