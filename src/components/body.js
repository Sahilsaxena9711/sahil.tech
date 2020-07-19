import React, { Component } from 'react'
import "../styles/body.css";
import { WORK_EXPERIENCE, GIT_PICTURE } from '../constants';

export default class Body extends Component {
    render() {
        console.log(WORK_EXPERIENCE);
        return (
            <div className={"bodyContainer"}>
                <img className={"profileImg"} src={GIT_PICTURE} />
                <h1 className={"authorAbout"}>
                    Sahil Saxena
                </h1>
                <span className={"quote"}>
                    “Falling down is an accident, staying down is a choice.”
                </span>
                <div className={"stepper"} className={"workContainer"}>
                    {WORK_EXPERIENCE.map((work, workKey) =>
                        <div key={workKey} className={!work.subText.includes("Present") && "mr-20"}>
                            <img
                                src={work.url}
                                className={"workImg"}
                            />
                            <h4 className={"workLabel"}>{work.label}</h4>
                            <p className={"workSubText"}>{work.subText}</p>
                        </div>
                    ).toList()}
                </div>
            </div>
        )
    }
}
