import React, { Component } from 'react'
import "../styles/modal.css";
import { mapper } from '../constants';
import search from "../assets/search-small.svg";

export default class Modal extends Component {
    state = {
        search: ""
    }

    onItemClick = (name, page) => {
        if (page) {
            window.open(page);
            return;
        }
        if (name) {
            this.props.onWallpaperChange(name);
            return;
        }
    }

    render() {
        const refinedList = mapper.get(this.props.modalKey).filter(_ => _.label.toLowerCase().includes(this.state.search.toLowerCase()));
        return (
            <div className={"modal"}>
                <div className={"modal-header"}>
                    <div className={"w-33"}>
                        <span
                            onClick={() => this.props.toggleModalVisible(this.props.modalKey)}
                            className={"closeBtn"}
                        >
                            <span className={"closeText"}>x</span>
                        </span>
                    </div>
                    <div className={"w-33"}>
                        <span className={"modalLabel"}>
                            {this.props.label}
                        </span>
                    </div>
                    <div className={"w-33 d-f-end"}>
                        <div className={"searchContainer"}>
                            <img className={"headerImages"} src={search} />
                            <input
                                onChange={e => this.setState({ search: e.target.value })}
                                placeholder={"Search"}
                                className={"searchInput"} />
                        </div>
                    </div>
                </div>
                <div className={"itemContainer"}>
                    {refinedList.map((_, k) => <div
                        onClick={() => this.onItemClick(_.name, _.page)}
                        key={k}
                        className={"item"}>
                        {this.props.modalKey === "setting" ? <div style={{
                            width: "80px",
                            height: "70px",
                            background: _.name,
                            border: "0.5px solid #fff",
                            borderRadius: "2px"
                        }} /> : <img style={{ width: "80px" }}
                            src={_.url}
                            />}
                        <span className={"itemLabel"}>{_.label}</span>
                    </div>).toList()}
                </div>
            </div>
        )
    }
}
