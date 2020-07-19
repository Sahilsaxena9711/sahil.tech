import React, { Component } from 'react';
import "../styles/footer.css";
import { TABS } from "../constants";

export default class Footer extends Component {
    render() {
        return (
            <div className="dock-container">
                <div className="dock" >
                    <ul>
                        {TABS.map((tab, tabKey) => <li key={tabKey}>
                            <span>{tab.label}</span>
                            <a
                                onClick={
                                    () => tab.page ?
                                        window.open(tab.page) :
                                        this.props.toggleModalVisible(tab.label, tabKey)
                                }
                            >
                                <img src={tab.url} />
                            </a>
                            <div className={"activeDotContainer"}>
                                <div
                                    className={"activeDot"}
                                    style={{
                                        background: this.props.activetabs.includes(tabKey) && "#fff"
                                    }} />
                            </div>
                        </li>).toList()}
                    </ul>
                </div>
            </div >
        )
    }
}