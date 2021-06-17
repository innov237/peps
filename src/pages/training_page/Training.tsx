import React from 'react';
import BuildTitle from '../../components/widgets/title_widget/TitleWidget';
import trainingData from '../../data/courses.json';
import './Training.css';

const Training: React.FC = () => {
    return (
        <div>
            <BuildTitle title="Plan du site"></BuildTitle>
            <div className="training__rowd container-fluid">
                <div className="row">
                    {trainingData.map((training: any, index) => {
                        return (
                            <div className="col-md-3">
                                <a  href={'#/page/' + training.id + "/" + training.id}>
                                    <div className="card training__card bg-blue group__card">
                                        <img className="training__logo" src={training.image} alt="logo" />
                                        <div className="card-body">
                                            <h1>{training?.title}</h1>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        )
                    })}
                </div>
            </div>


        </div>
    )
}

export default Training;