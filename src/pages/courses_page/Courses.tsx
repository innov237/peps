
import React, { useRef, useState } from 'react';
import { RouteComponentProps, useLocation } from 'react-router';
import trainingData from '../../data/courses.json';
import './Courses.css';


interface idparams extends RouteComponentProps<{ idTraining: any, idCourses: any }> { };

const Courses: React.FC<idparams> = (props) => {
    const myRef = useRef<any>(null)

    const idCourses = props.match.params.idCourses;

    const [trainingDatas, settrainingDatas] = useState<any>([])
    const executeScroll = () => myRef.current.scrollIntoView()


    const location = useLocation()

    React.useEffect(() => {
        executeScroll()
        trainingData.map((item: any) => {
            if (item.id == idCourses) {
                settrainingDatas(item);
            }
        })
    }, [location])

    return (
        <div ref={myRef} className="courses">
            <div className="courses__header mt-2" style={{ backgroundImage: `url(${trainingDatas?.image})`, backgroundPosition: "center" }}>
                <div className="row text-center">
                    <div className="col-md-12">
                        <h1 className="courses__title">{trainingDatas?.title}</h1>
                        <p className="text__center" style={{textAlign:"center"}}>
                            {trainingDatas?.slogan}
                        </p>
                    </div>
                </div>
            </div>

            <div className="training__row p-0">
                <div className="row">
                    {trainingData.filter((result) => result.id == idCourses).map((training: any, index) => {
                        return training.courses.map((element: any) =>
                            <div className="col-md-3">
                                <a href={'#/page/' + training.id + "/" + element.id}>
                                    <div className="card training__card bg-blue">
                                        <img className="training__logo" src={element.image} alt="logo" />
                                        <div className="card-body">
                                            <h1>{element?.title}</h1>
                                            <p>{element?.description}</p>
                                            <p className="price">{element?.prix}</p>
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
export default Courses;