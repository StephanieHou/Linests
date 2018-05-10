import React from "react";
import { Route, Link, Switch } from 'react-router-dom';
import * as ReactBootstrap from 'react-bootstrap';
import $ from 'jquery';
import Navigation from '../Navigation/navigation';

import './users.scss';

const Account = ({ photo, name, about, location, birthday, facebook, interests }) => {
    return (
        <div class="information">
            <div class="container">
                <div class="row">
                    <div class="col-xs-5 col-md-3">
                        <div class="userinfo pull-right">
                            <div class="propic"></div>
                            <br />
                            <div class="proinfo">
                                <p>Name: {name} </p>
                                <p>About: {about}</p>
                                <p>Location: {location}</p>
                                <p>Birthday: {birthday}</p>
                                <p>Facebook: {facebook}</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-10 col-md-6 pull-left">
                        <div class="compinfo">
                            <div class="comphead">
                                <h3>Account Summary</h3>
                            </div>
                            <div>

                            </div>
                        </div>
                    </div>
                    <div class="col-xs-3 col-md-3 pull-right">
                        <div class="cal">
                            <div class="calendar calendar-first" id="calendar_first">
                                <div class="calendar_header">
                                    <button class="switch-month switch-left"> <i class="fa fa-chevron-left"></i></button>
                                    <h2></h2>
                                    <button class="switch-month switch-right"> <i class="fa fa-chevron-right"></i></button>
                                </div>
                                <div class="calendar_weekdays"></div>
                                <div class="calendar_content"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Matches = ({ photo, name, about, location, birthday, facebook, matches }) => {
    return (
        <div class="information">
            <div class="container">
                <div class="row">
                    <div class="col-xs-5 col-md-3">
                        <div class="userinfo pull-right">
                            <div class="propic"></div>
                            <br />
                            <div class="proinfo">
                                <p>Name: {name} </p>
                                <p>About: {about}</p>
                                <p>Location: {location}</p>
                                <p>Birthday: {birthday}</p>
                                <p>Facebook: {facebook}</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-10 col-md-6 pull-left">
                        <div class="compinfo">
                            <div class="comphead">
                                <h3>Matches</h3>
                            </div>
                            <div>

                            </div>
                        </div>
                    </div>
                    <div class="col-xs-3 col-md-3 pull-right">
                        <div class="cal">
                            <div class="calendar calendar-first" id="calendar_first">
                                <div class="calendar_header">
                                    <button class="switch-month switch-left"> <i class="fa fa-chevron-left"></i></button>
                                    <h2></h2>
                                    <button class="switch-month switch-right"> <i class="fa fa-chevron-right"></i></button>
                                </div>
                                <div class="calendar_weekdays"></div>
                                <div class="calendar_content"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Friends = ({ photo, name, about, location, birthday, facebook, friends }) => {
    return (
        <div class="information">
            <div class="container">
                <div class="row">
                    <div class="col-xs-5 col-md-3">
                        <div class="userinfo pull-right">
                            <div class="propic"></div>
                            <br />
                            <div class="proinfo">
                                <p>Name: {name} </p>
                                <p>About: {about}</p>
                                <p>Location: {location}</p>
                                <p>Birthday: {birthday}</p>
                                <p>Facebook: {facebook}</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-10 col-md-6 pull-left">
                        <div class="compinfo">
                            <div class="comphead">
                                <h3>Friends</h3>
                            </div>
                            <div>

                            </div>
                        </div>
                    </div>
                    <div class="col-xs-3 col-md-3 pull-right">
                        <div class="cal">
                            <div class="calendar calendar-first" id="calendar_first">
                                <div class="calendar_header">
                                    <button class="switch-month switch-left"> <i class="fa fa-chevron-left"></i></button>
                                    <h2></h2>
                                    <button class="switch-month switch-right"> <i class="fa fa-chevron-right"></i></button>
                                </div>
                                <div class="calendar_weekdays"></div>
                                <div class="calendar_content"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Chatroom = ({ photo, name, about, location, birthday, facebook, chat }) => {
    return (
        <div class="information">
            <div class="container">
                <div class="row">
                    <div class="col-xs-5 col-md-3">
                        <div class="userinfo pull-right">
                            <div class="propic"></div>
                            <br />
                            <div class="proinfo">
                                <p>Name: {name} </p>
                                <p>About: {about}</p>
                                <p>Location: {location}</p>
                                <p>Birthday: {birthday}</p>
                                <p>Facebook: {facebook}</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-10 col-md-6 pull-left">
                        <div class="compinfo">
                            <div class="comphead">
                                <h3>Chatroom</h3>
                            </div>
                            <div>

                            </div>
                        </div>
                    </div>
                    <div class="col-xs-3 col-md-3 pull-right">
                        <div class="cal">
                            <div class="calendar calendar-first" id="calendar_first">
                                <div class="calendar_header">
                                    <button class="switch-month switch-left"> <i class="fa fa-chevron-left"></i></button>
                                    <h2></h2>
                                    <button class="switch-month switch-right"> <i class="fa fa-chevron-right"></i></button>
                                </div>
                                <div class="calendar_weekdays"></div>
                                <div class="calendar_content"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Settings = ({ photo, name, about, location, birthday, facebook, email, password, cpassword }) => {
    return (
        <div class="information">
            <div class="container">
                <div class="row">
                    <div class="col-xs-5 col-md-3">
                        <div class="userinfo pull-right">
                            <div class="propic"></div>
                            <br />
                            <div class="proinfo">
                                <p>Name: {name} </p>
                                <p>About: {about}</p>
                                <p>Location: {location}</p>
                                <p>Birthday: {birthday}</p>
                                <p>Facebook: {facebook}</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-10 col-md-6 pull-left">
                        <div class="compinfo">
                            <div class="comphead">
                                <h3>Settings</h3>
                            </div>
                            <div>

                            </div>
                        </div>
                    </div>
                    <div class="col-xs-3 col-md-3 pull-right">
                        <div class="cal">
                            <div class="calendar calendar-first" id="calendar_first">
                                <div class="calendar_header">
                                    <button class="switch-month switch-left"> <i class="fa fa-chevron-left"></i></button>
                                    <h2></h2>
                                    <button class="switch-month switch-right"> <i class="fa fa-chevron-right"></i></button>
                                </div>
                                <div class="calendar_weekdays"></div>
                                <div class="calendar_content"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};



class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //main
            photo: "",
            name: "Stephanie Hou",
            about: "Developer From New York",
            location: "New York, New York",
            birthday: "Nov 11th",
            facebook: "Link",
            //account
            interests: [],
            //matches
            matches: [],
            //friends
            friends: [],
            //settings
            username: "",
            password: "",
            cpassword: "",
        };
    }

    componentWillMount() {
        $(document).ready(function () {
            $("#sidebarCollapse").on("click", function () {
                $("#sidebar").toggleClass("active");
                $(this).toggleClass("active");
                $("#sidebar").trigger('click')
            });
        });
        $(document).ready(function () {
            $("#sidebarCollapse").click(function () {
                $(".cal").toggle();
            });
        });

        // Calendar
        $(document).ready(function () {
            function c(passed_month, passed_year, calNum) {
                var calendar = calNum === 0 ? calendars.cal1 : calendars.cal2;
                makeWeek(calendar.weekline);
                calendar.datesBody.empty();
                var calMonthArray = makeMonthArray(passed_month, passed_year);
                var r = 0;
                var u = false;
                while (!u) {
                    if (daysArray[r] === calMonthArray[0].weekday) {
                        u = true
                    } else {
                        calendar.datesBody.append('<div class="blank"></div>');
                        r++;
                    }
                }
                for (var cell = 0; cell < 42 - r; cell++) {
                    if (cell >= calMonthArray.length) {
                        calendar.datesBody.append('<div class="blank"></div>');
                    } else {
                        var shownDate = calMonthArray[cell].day;
                        var iter_date = new Date(passed_year, passed_month, shownDate);
                        if (
                            (
                                (shownDate !== today.getDate() && passed_month === today.getMonth()) || passed_month !== today.getMonth()) && iter_date < today) {
                            var m = '<div class="past-date">';
                        } else {
                            var m = checkToday(iter_date) ? '<div class="today">' : "<div>";
                        }
                        calendar.datesBody.append(m + shownDate + "</div>");
                    }
                }

                var color = "#444444";
                calendar.calHeader.find("h2").text(i[passed_month] + " " + passed_year);
                calendar.weekline.find("div").css("color", color);
                calendar.datesBody.find(".today").css("color", "#6AC5F2");

                var clicked = false;
                selectDates(selected);

                clickedElement = calendar.datesBody.find('div');
                clickedElement.on("click", function () {
                    clicked = $(this);
                    var whichCalendar = calendar.name;

                    if (firstClick && secondClick) {
                        thirdClicked = getClickedInfo(clicked, calendar);
                        var firstClickDateObj = new Date(firstClicked.year,
                            firstClicked.month,
                            firstClicked.date);
                        var secondClickDateObj = new Date(secondClicked.year,
                            secondClicked.month,
                            secondClicked.date);
                        var thirdClickDateObj = new Date(thirdClicked.year,
                            thirdClicked.month,
                            thirdClicked.date);
                        if (secondClickDateObj > thirdClickDateObj && thirdClickDateObj > firstClickDateObj) {
                            secondClicked = thirdClicked;

                            bothCals.find(".calendar_content").find("div").each(function () {
                                $(this).removeClass("selected");
                            });
                            selected = {};
                            selected[firstClicked.year] = {};
                            selected[firstClicked.year][firstClicked.month] = [firstClicked.date];
                            selected = addChosenDates(firstClicked, secondClicked, selected);
                        } else {
                            selected = {};
                            firstClicked = [];
                            secondClicked = [];
                            firstClick = false;
                            secondClick = false;
                            bothCals.find(".calendar_content").find("div").each(function () {
                                $(this).removeClass("selected");
                            });
                        }
                    }
                    if (!firstClick) {
                        firstClick = true;
                        firstClicked = getClickedInfo(clicked, calendar);
                        selected[firstClicked.year] = {};
                        selected[firstClicked.year][firstClicked.month] = [firstClicked.date];
                    } else {
                        secondClick = true;
                        secondClicked = getClickedInfo(clicked, calendar);

                        var firstClickDateObj = new Date(firstClicked.year,
                            firstClicked.month,
                            firstClicked.date);
                        var secondClickDateObj = new Date(secondClicked.year,
                            secondClicked.month,
                            secondClicked.date);

                        if (firstClickDateObj > secondClickDateObj) {

                            var cachedClickedInfo = secondClicked;
                            secondClicked = firstClicked;
                            firstClicked = cachedClickedInfo;
                            selected = {};
                            selected[firstClicked.year] = {};
                            selected[firstClicked.year][firstClicked.month] = [firstClicked.date];

                        } else if (firstClickDateObj.getTime() === secondClickDateObj.getTime()) {
                            selected = {};
                            firstClicked = [];
                            secondClicked = [];
                            firstClick = false;
                            secondClick = false;
                            $(this).removeClass("selected");
                        }
                        selected = addChosenDates(firstClicked, secondClicked, selected);
                    }
                    selectDates(selected);
                });

            }

            function selectDates(selected) {
                if (!$.isEmptyObject(selected)) {
                    var dateElements1 = datesBody1.find('div');
                    var dateElements2 = datesBody2.find('div');

                    function highlightDates(passed_year, passed_month, dateElements) {
                        if (passed_year in selected && passed_month in selected[passed_year]) {
                            var daysToCompare = selected[passed_year][passed_month];
                            for (var d in daysToCompare) {
                                dateElements.each(function (index) {
                                    if (parseInt($(this).text()) === daysToCompare[d]) {
                                        $(this).addClass('selected');
                                    }
                                });
                            }

                        }
                    }
                    highlightDates(year, month, dateElements1);
                    highlightDates(nextYear, nextMonth, dateElements2);
                }
            }

            function makeMonthArray(passed_month, passed_year) {
                var e = [];
                for (var r = 1; r < getDaysInMonth(passed_year, passed_month) + 1; r++) {
                    e.push({
                        day: r,
                        weekday: daysArray[getWeekdayNum(passed_year, passed_month, r)]
                    });
                }
                return e;
            }

            function makeWeek(week) {
                week.empty();
                for (var e = 0; e < 7; e++) {
                    week.append("<div>" + daysArray[e].substring(0, 3) + "</div>")
                }
            }

            function getDaysInMonth(currentYear, currentMon) {
                return (new Date(currentYear, currentMon + 1, 0)).getDate();
            }

            function getWeekdayNum(e, t, n) {
                return (new Date(e, t, n)).getDay();
            }

            function checkToday(e) {
                var todayDate = today.getFullYear() + '/' + (today.getMonth() + 1) + '/' + today.getDate();
                var checkingDate = e.getFullYear() + '/' + (e.getMonth() + 1) + '/' + e.getDate();
                return todayDate === checkingDate;

            }

            function getAdjacentMonth(curr_month, curr_year, direction) {
                var theNextMonth;
                var theNextYear;
                if (direction === "next") {
                    theNextMonth = (curr_month + 1) % 12;
                    theNextYear = (curr_month === 11) ? curr_year + 1 : curr_year;
                } else {
                    theNextMonth = (curr_month === 0) ? 11 : curr_month - 1;
                    theNextYear = (curr_month === 0) ? curr_year - 1 : curr_year;
                }
                return [theNextMonth, theNextYear];
            }

            function b() {
                today = new Date;
                year = today.getFullYear();
                month = today.getMonth();
                var nextDates = getAdjacentMonth(month, year, "next");
                nextMonth = nextDates[0];
                nextYear = nextDates[1];
            }

            var today;
            var year,
                month,
                nextMonth,
                nextYear;

            var i = [
                "JANUARY",
                "FEBRUARY",
                "MARCH",
                "APRIL",
                "MAY",
                "JUNE",
                "JULY",
                "AUGUST",
                "SEPTEMBER",
                "OCTOBER",
                "NOVEMBER",
                "DECEMBER"];
            var daysArray = [
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"];

            var cal1 = $("#calendar_first");
            var calHeader1 = cal1.find(".calendar_header");
            var weekline1 = cal1.find(".calendar_weekdays");
            var datesBody1 = cal1.find(".calendar_content");

            var cal2 = $("#calendar_second");
            var calHeader2 = cal2.find(".calendar_header");
            var weekline2 = cal2.find(".calendar_weekdays");
            var datesBody2 = cal2.find(".calendar_content");

            var bothCals = $(".calendar");

            var switchButton = bothCals.find(".calendar_header").find('.switch-month');

            var calendars = {
                "cal1": {
                    "name": "first",
                    "calHeader": calHeader1,
                    "weekline": weekline1,
                    "datesBody": datesBody1
                },
                "cal2": {
                    "name": "second",
                    "calHeader": calHeader2,
                    "weekline": weekline2,
                    "datesBody": datesBody2
                }
            }


            var clickedElement;
            var firstClicked,
                secondClicked,
                thirdClicked;
            var firstClick = false;
            var secondClick = false;
            var selected = {};

            b();
            c(month, year, 0);
            c(nextMonth, nextYear, 1);
            switchButton.on("click", function () {
                var clicked = $(this);
                var generateCalendars = function (e) {
                    var nextDatesFirst = getAdjacentMonth(month, year, e);
                    var nextDatesSecond = getAdjacentMonth(nextMonth, nextYear, e);
                    month = nextDatesFirst[0];
                    year = nextDatesFirst[1];
                    nextMonth = nextDatesSecond[0];
                    nextYear = nextDatesSecond[1];

                    c(month, year, 0);
                    c(nextMonth, nextYear, 1);
                };
                if (clicked.attr("class").indexOf("left") !== -1) {
                    generateCalendars("previous");
                } else {
                    generateCalendars("next");
                }
                clickedElement = bothCals.find(".calendar_content").find("div");
            });

            function getClickedInfo(element, calendar) {
                var clickedInfo = {};
                var clickedCalendar,
                    clickedMonth,
                    clickedYear;
                clickedCalendar = calendar.name;
                clickedMonth = clickedCalendar === "first" ? month : nextMonth;
                clickedYear = clickedCalendar === "first" ? year : nextYear;
                clickedInfo = {
                    "calNum": clickedCalendar,
                    "date": parseInt(element.text()),
                    "month": clickedMonth,
                    "year": clickedYear
                }
                return clickedInfo;
            }

            function addChosenDates(firstClicked, secondClicked, selected) {
                if (secondClicked.date > firstClicked.date || secondClicked.month > firstClicked.month || secondClicked.year > firstClicked.year) {

                    var added_year = secondClicked.year;
                    var added_month = secondClicked.month;
                    var added_date = secondClicked.date;

                    if (added_year > firstClicked.year) {
                        selected[added_year] = {};
                        selected[added_year][added_month] = [];
                        for (var i = 1;
                            i <= secondClicked.date;
                            i++) {
                            selected[added_year][added_month].push(i);
                        }

                        added_month = added_month - 1;
                        while (added_month >= 0) {
                            selected[added_year][added_month] = [];
                            for (var i = 1;
                                i <= getDaysInMonth(added_year, added_month);
                                i++) {
                                selected[added_year][added_month].push(i);
                            }
                            added_month = added_month - 1;
                        }

                        added_year = added_year - 1;
                        added_month = 11;
                        added_date = getDaysInMonth(added_year, added_month);

                        while (added_year > firstClicked.year) {
                            selected[added_year] = {};
                            for (var i = 0; i < 12; i++) {
                                selected[added_year][i] = [];
                                for (var d = 1; d <= getDaysInMonth(added_year, i); d++) {
                                    selected[added_year][i].push(d);
                                }
                            }
                            added_year = added_year - 1;
                        }
                    }

                    if (added_month > firstClicked.month) {
                        if (firstClicked.year === secondClicked.year) {
                            selected[added_year][added_month] = [];
                            for (var i = 1;
                                i <= secondClicked.date;
                                i++) {
                                selected[added_year][added_month].push(i);
                            }
                            added_month = added_month - 1;
                        }
                        while (added_month > firstClicked.month) {
                            selected[added_year][added_month] = [];
                            for (var i = 1;
                                i <= getDaysInMonth(added_year, added_month);
                                i++) {
                                selected[added_year][added_month].push(i);
                            }
                            added_month = added_month - 1;
                        }
                        added_date = getDaysInMonth(added_year, added_month);
                    }

                    for (var i = firstClicked.date + 1;
                        i <= added_date;
                        i++) {
                        selected[added_year][added_month].push(i);
                    }
                }
                return selected;
            }
        });
    }

    handleLogout = () => {
        // Api.getLogout();
        // console.log("You have logout!");
    };

    renderUserProfile = () => {
        const { photo, name, about, location, birthday, facebook, interests, matches, friends, email, password, cpassword } = this.state;
        return (
            <div id="users">
                <div class="wrapper">
                    <nav id="sidebar">
                        <div class="sidebar-header">
                            <h3><Link to={'/'}><a>Linests</a></Link></h3>
                            <p>Welcome User</p>
                        </div>
                        <ul class="list-unstyled components">
                            <li><Link to={'/userprofile/account'}><a>Account</a></Link></li>
                            <li><Link to={'/userprofile/matches'}><a>Matches</a></Link></li>
                            <li><Link to={'/userprofile/friends'}><a>Friends</a></Link></li>
                            <li><Link to={'/userprofile/settings'}><a>Settings</a></Link></li>
                            <li><Link to={'/logout'}><a>Log Out</a></Link></li>
                        </ul>
                    </nav>
                    <div id="content">
                        <nav class="navbar navbar-default">
                            <div class="container-fluid">
                                <div class="navbar-header">
                                    <button type="button" id="sidebarCollapse" class="navbar-btn">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </button>
                                </div>
                            </div>
                        </nav>
                        <div class="profile">
                            <Route
                                exact
                                path="/userprofile/account"
                                component={() => <Account photo={photo} name={name} about={about} location={location} birthday={birthday} facebook={facebook} interests={interests} />}
                            />
                            <Route
                                exact
                                path="/userprofile/matches"
                                component={() => <Matches photo={photo} name={name} about={about} location={location} birthday={birthday} facebook={facebook} matches={matches} />}
                            />
                            <Route
                                exact
                                path="/userprofile/friends"
                                component={() => <Friends photo={photo} name={name} about={about} location={location} birthday={birthday} facebook={facebook} friends={friends} />}
                            />
                            <Route
                                exact
                                path="/userprofile/chatroom"
                                component={() => <Chatroom photo={photo} name={name} about={about} location={location} birthday={birthday} facebook={facebook} />}
                            />
                            <Route
                                exact
                                path="/userprofile/settings"
                                component={() => <Settings photo={photo} name={name} about={about} location={location} birthday={birthday} facebook={facebook} email={email} password={password} cpassword={cpassword} />}
                            />
                        </div>

                    </div>
                </div>
            </div>
        );
    };

    render() {
        return (
            <div>
                <Switch>
                    <Route path="/userprofile" render={this.renderUserProfile} />
                </Switch>
            </div>
        );
    }
}

export default Users;