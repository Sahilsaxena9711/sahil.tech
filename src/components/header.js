import React, { Component } from 'react'
import "../styles/header.css";
import Clock from './clock';
import info from "../assets/info.svg";
import setting from "../assets/setting.svg";
import search from "../assets/search.svg";
import { AUTHOR_NICKNAME } from "../constants";

export default class Header extends Component {
    render() {
        return (
            <div className={"header"}>
                <div className={"headerLeft"}>
                    <img className={"headerImages ml-10"} src={info} />
                    {window.screen.width < 600 ? null : <span className={"author"}>
                        {this.props.activeTabName}
                    </span>}
                </div>
                <div className={"headerRight"}>
                    <Clock />
                    <span className={"author"}>
                        {AUTHOR_NICKNAME}
                    </span>
                    <div onClick={() => this.props.openTab("Change Background", "setting")}>
                        <img className={"headerImages ml-10"} src={setting} />
                    </div>
                    <div onClick={() => this.props.openTab("Search", "all")}>
                        <img className={"headerImages ml-8 mr-10"} src={search} />
                    </div>
                </div>
            </div>
        )
    }
}
