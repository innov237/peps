import React from "react";
import trainingData from '../../data/courses.json';
import BuildTitle from "../widgets/title_widget/TitleWidget";
import poduim from '../../assets/images/podiums.png';

import "./Topcourses.css";

const TopCourses: React.FC = () => {

    return (<div>
        <div className="top__training__row">
            <BuildTitle title="Formations les plus plébiscitées" center={true}></BuildTitle>
            <div className="row">
                <div className="container">
                    <div className="col-md-12">
                        <img className="podium__image" src={poduim} width="100%"/>
                    </div>
                </div>
                <div className="col-md-12 mt-3">
                    <div className="row ml-2 mr-2 mt-2">
                        {trainingData.filter((item: any) => item.is_top == true).map((training: any, index) => {
                            return (
                                <div className="col-md-3 top__courses">
                                    <a href={'#/formation-group/' + training.id}>
                                        <div className="top__courses__item">
                                            <div className="img">
                                                <img src={training.image} alt="icon" className="top__courses__image" />
                                            </div>
                                            <div className="top__training__content">{training.title}</div>
                                        </div>
                                    </a>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

        </div>
    </div>)
}

export default TopCourses;