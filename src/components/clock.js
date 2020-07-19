import React, { Component } from 'react'
import moment from 'moment';

export default class Clock extends Component {
    state = {
        time: new Date()
    }

    componentDidMount() {
        this.timeInterval = setInterval(() => {
            this.setState({
                time: new Date()
            });
        }, 60000);
    }

    componentWillUnmount() {
        clearInterval(this.timeInterval());
    }

    render() {
        return (
            <span className={"author"}>
                {moment(this.state.time).format("ddd hh:mm A")}
            </span>
        )
    }
}
