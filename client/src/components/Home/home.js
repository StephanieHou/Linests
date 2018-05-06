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

        $.each($animation_elements, function() {
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

        $("#button").click(function() {
            $('html, body').animate({
                scrollTop: $("#first").offset().top
            }, 2000);
        });
    }


    render() {
        return (
            <div>
                <Navigation />
                <div class="parallax">
                    <h1>Linests</h1>
                    <div id="section03" class="demo">
                    <a href="#first" id="button"><span></span></a>
                    </div>
                </div>
                <div class="parallax1" id="first">
                    <div id="about" class="animation-element bounce-up">
                        <h1 class="animation-element bounce-up">Our Story</h1>
                    </div>
                </div>
                <div class="parallax2">
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
                               <div class="animation-element bounce-up">
                                   <h1>Step 1</h1>
                                   <h3>You Provide Us With Your Interests!</h3>
                                </div>
                               <p class="backimg animation-element bounce-up" id="step1"></p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-8 col-md-6">
                                <div class="animation-element bounce-up pull-right">
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
                                <div class="animation-element bounce-up">
                                    <h1>Step 3</h1>
                                    <h3>You Can Chat With Your Matches And Add Them As Friends.</h3>
                                </div>
                                <p class="backimg animation-element bounce-up" id="step3"></p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-8 col-md-6">
                                <div class="animation-element bounce-up pull-right">
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
                <div class="parallax3">
                    <Link to={'/signup'}><a class="animation-element bounce-up">Join Today!</a></Link>
                </div>
                <div class="parallax4">
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