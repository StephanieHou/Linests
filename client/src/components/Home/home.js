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

                //check to see if this current container is within viewport
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


    render() {
        return (
            <div>
                <Navigation />
                <div id="side">
                    <div id="mySidenav" class="sidenav">
                        <a href="#first" id="sideOne">About</a>
                        <a href="#second" id="sideTwo">Steps</a>
                        <a href="#fourth" id="sideThree">Contact</a>
                    </div>
                </div>
                <div class="parallax">
                    <h1>Linests</h1>
                    <div id="section03" class="demo">
                        <a href="#first" id="button"><span></span></a>
                    </div>
                </div>
                <div class="parallax1" id="first">
                    <div id="about" class="animation-element bounce-up">
                        <h1 class="animation-element bounce-up">Our Story</h1>
                        <h3 class="animation-element bounce-up">The idea started when we realized that sometimes we have interests that none of our friends have. We have different friend groups for different reasons. Why not make the process of finding new friends that share certain interests a lot easier?
                        <br/> <br /> With Linests, you can now find new people to do things with that you do not want to be alone and feel secure about it!</h3>
                    </div>
                </div>
                <div class="parallax2" id="second">
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <h1 class="animation-element bounce-up">How Does Linests Work?</h1>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-10 col-md-6">
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