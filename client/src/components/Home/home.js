import React from "react";
import { Route, Link, Switch } from 'react-router-dom';
import Navigation from '../Navigation/navigation';
import * as ReactBootstrap from 'react-bootstrap';
import $ from 'jquery';

import './home.scss';
import Api from "../Api/Api";
import swal from 'sweetalert'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    };

    componentDidMount() {
        var $animation_elements = $('.animation-element');
        var $window = $(window);

        function check_if_in_view() {
            var window_height = $window.height();
            var window_top_position = $window.scrollTop();
            var window_bottom_position = (window_top_position + window_height);

            $.each($animation_elements, function () {
                var $element = $(this);
                var element_height = $element.outerHeight();
                var element_top_position = $element.offset().top;
                var element_bottom_position = (element_top_position + element_height);

                if ((element_bottom_position >= window_top_position) &&
                    (element_top_position <= window_bottom_position)) {
                    $element.addClass('in-view');
                } else {
                    $element.removeClass('in-view');
                }
            });
        }
        $window.on('scroll resize', check_if_in_view);
        $window.trigger('scroll');

        $("#button").click(function () {
            $('html, body').animate({
                scrollTop: $("#first").offset().top
            }, 2000);
        });

        $("#sideOne").click(function () {
            $('html, body').animate({
                scrollTop: $("#first").offset().top
            }, 2000);
        });

        $("#sideTwo").click(function () {
            $('html, body').animate({
                scrollTop: $("#second").offset().top
            }, 2000);
        });

        $("#sideThree").click(function () {
            $('html, body').animate({
                scrollTop: $("#fourth").offset().top
            }, 2000);
        });
    }

    handleLogout = () => {
        Api.getLogout();
        this.props.handleLogin("");
        console.log("You have logout!");
        swal({
            title: "You Have Been Logged Out",
            text: "We hope to see you again!"
        });
    };


    render() {
        return (
            <div>
                <Navigation isLoggedIn={this.props.isLoggedIn} handleLogout={this.handleLogout} />
                <div id="side">
                    <div id="mySidenav" class="sidenav">
                        <a href="#first" id="sideOne" class="pink">About</a>
                        <a href="#second" id="sideTwo" class="purple">Steps</a>
                        <a href="#fourth" id="sideThree" class="blue">Contact</a>
                    </div>
                </div>
                <div class="parallax">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
                        <defs>
                            <clipPath id="_clipPath_WO9zGlmSbLtJvrrta7kb2DkLZDcAdPOO">
                                <rect width="500" height="500" />
                            </clipPath>
                        </defs>
                        <g clip-path="url(#_clipPath_WO9zGlmSbLtJvrrta7kb2DkLZDcAdPOO)">
                            <rect width="500" height="500" fill="none" />
                            <path class="fadeIn" d=" M 384 119 C 215 122.667 126.657 211.01 119 384 M 384 119 C 239 144 150.657 232.343 119 384" fill-rule="evenodd" fill="rgb(255,255,255)" />
                            <path class="fadeIn" d=" M 119 119 C 288 122.667 376.343 211.01 384 384 M 119 119 C 264 144 352.343 232.343 384 384" fill-rule="evenodd" fill="rgb(255,255,255)" />
                            <path class="fadeIn" d=" M 119 384 C 288 380.333 376.343 291.99 384 119 M 119 384 C 264 359 352.343 270.657 384 119" fill-rule="evenodd" fill="rgb(255,255,255)" />
                            <path class="fadeIn" d=" M 384 384 C 215 380.333 126.657 291.99 119 119 M 384 384 C 239 359 150.657 270.657 119 119" fill-rule="evenodd" fill="rgb(255,255,255)" />
                            <path class="fadeIn" d=" M 62.629 251.5 C 183.398 133.224 308.326 131.816 437.371 247.278 M 62.629 251.5 C 181.873 165.298 306.802 163.891 437.371 247.278" fill-rule="evenodd" fill="rgb(255,255,255)" />
                            <path class="fadeIn" d=" M 62.628 255.624 C 185.97 371.214 310.899 369.872 437.372 251.598 M 62.628 255.624 C 183.74 339.18 308.669 337.838 437.372 251.598" fill-rule="evenodd" fill="rgb(255,255,255)" />
                            <path class="fadeIn" d=" M 249.977 438.894 C 131.701 318.125 130.293 193.197 245.755 64.152 M 249.977 438.894 C 163.775 319.65 162.368 194.721 245.755 64.152" fill-rule="evenodd" fill="rgb(255,255,255)" />
                            <path class="fadeIn" d=" M 254.101 438.895 C 369.691 315.553 368.349 190.624 250.075 64.15 M 254.101 438.895 C 337.657 317.783 336.315 192.854 250.075 64.15" fill-rule="evenodd" fill="rgb(255,255,255)" />
                            <path class="spin" d=" M 57.291 251.598 C 57.291 146.5 143.631 61.174 249.977 61.174 C 356.323 61.174 442.663 146.5 442.663 251.598 C 442.663 356.696 356.323 442.022 249.977 442.022 C 143.631 442.022 57.291 356.696 57.291 251.598 Z " fill="none" vector-effect="non-scaling-stroke" stroke-width="5" stroke-dasharray="1,10" stroke="rgb(255,255,255)" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="3" />
                            <g transform="matrix(1,0,0,1,0,167)">
                                <text id="homeheader" transform="matrix(1,0,0,1,51.334,126.953)" fill="#000000" stroke="none">Linests</text>
                            </g>
                        </g>
                    </svg>
                    <div id="scrollbtn" class="demo">
                        <a href="#first" id="button"><span></span></a>
                    </div>
                </div>
                <div class="parallax1" id="first">
                    <div id="about" class="animation-element bounce-up">
                        <h1 class="animation-element bounce-up">Our Story</h1>
                        <h3 class="animation-element bounce-up">The idea started when we realized that sometimes we have interests that none of our friends have. We have different friend groups for different reasons. Why not make the process of finding new friends that share certain interests a lot easier?
                        <br /> <br /> With Linests, you can now find new people to do things with that you do not want to be alone and feel secure about it!</h3>
                    </div>
                </div>
                <div class="parallax2" id="second">
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <h1 class="animation-element bounce-up" id="title">How Does Linests Work?</h1>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-10 col-md-6">
                                <div class="animation-element bounce-up blue" >
                                    <h3>We have a few steps you can follow!</h3>
                                </div>
                            </div>
                            <div class="col-xs-8 col-md-6 pull-right">
                                <div class="animation-element bounce-up pink" >
                                    <h1>Step 1</h1>
                                    <h3>You Provide Us With Your Interests!</h3>
                                </div>
                                <p class="backimg animation-element bounce-up" id="step1"></p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-8 col-md-6">
                                <div class="animation-element bounce-up pull-right purple">
                                    <h1>Step 2</h1>
                                    <h3>We Will Then Use This Information To Match You Up With People Who Have The Same/Similar Interests.</h3>
                                </div>
                                <p class="backimg animation-element bounce-up" id="step2"></p>
                            </div>
                            <div class="col-xs-10 col-md-6">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-10 col-md-6">
                            </div>
                            <div class="col-xs-8 col-md-6 pull-right">
                                <div class="animation-element bounce-up blue">
                                    <h1>Step 3</h1>
                                    <h3>You Can Chat With Your Matches And Add Them As Friends.</h3>
                                </div>
                                <p class="backimg animation-element bounce-up" id="step3"></p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-8 col-md-6">
                                <div class="animation-element bounce-up pull-right pink">
                                    <h1>Step 4</h1>
                                    <h3>Should You Set Up A Time To Hang Out, We Will Follow Up And Remind You!</h3>
                                </div>
                                <p class="backimg animation-element bounce-up" id="step4"></p>
                            </div>
                            <div class="col-xs-10 col-md-6">
                                <div class="animation-element bounce-up purple" id="lastStep">
                                    <h3>Now you are ready to Linests!</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="parallax3" id="third">
                    <Link to={'/signup'}><a class="animation-element bounce-up">Join Today!</a></Link>
                </div>
                <div class="parallax4" id="fourth">
                    <Link to={'/contact'}><a class="animation-element bounce-up">Contact Us</a></Link>
                </div>
                <div class="footer">
                    <p>@Linests 2018</p>
                </div>
            </div>
        )
    }
}

export default Home;