import React from 'react';
import './TitleWidget.css';

type Title = {
    title: String,
    center?:boolean,
}
const BuildTitle: React.FC<Title> = (props) => (
    <div>
        <div className={props.center ? "row__title center__text":"row__title"}>
            <h1 className="title">{props.title}</h1>
            <div className="divider"></div>
        </div>
    </div>
)

export default BuildTitle;