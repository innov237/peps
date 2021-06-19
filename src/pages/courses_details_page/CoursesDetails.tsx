import React, { useState, useRef } from 'react';
import { Link, RouteComponentProps, useLocation } from 'react-router-dom';
import "./CoursesDetails.css"
import trainingData from '../../data/courses.json';
import Banner1 from "../../assets/images/1.jpg";
import Banner2 from "../../assets/images/2.jpg";

interface idparams extends RouteComponentProps<{ idTraining: any, idCourses: any }> { };

const CoursesDetails: React.FC<idparams> = (props) => {
    const idTraining = props.match.params.idTraining;
    const idCourses = props.match.params.idCourses;

    const [trainingDatas, settrainingDatas] = useState<any>([])
    const [coursesData, setcoursesData] = useState<any>([])
    const myRef = useRef<any>(null)
    const executeScroll = () => myRef.current.scrollIntoView()

    const location = useLocation()

    // const color = ["#1971B6", "#36285F", "#1971B6", "#F15BB5", "#FC9902", "#8601AF", "#36285F", "#652283", "#29166F", "#801D77", "#DD127B", "#DC1E5C", "#E15517", "#00923F", "#00938D", "#0093DB", "#005CA1", "#2B2A28", "#E27B66", "#743BB7"];

    React.useEffect(() => {
        executeScroll()

        trainingData.map((item: any) => {
            if (item.id == idTraining) {
                settrainingDatas(item);
            }
        })

        trainingData.map((item: any) => {
            item.courses.map((item: any) => {
                if (item.id == idCourses) {
                    setcoursesData(item);
                }
            })
        })
    }, [location])

    return (
        <div ref={myRef} className="courses">
            <div className="courses__header mt-2" style={{ backgroundImage: `url(${coursesData?.image})`, backgroundPosition: "center" }}>
                <div className="row">
                    <div className="col-md-10">
                        <h1 className="training__title">{trainingDatas?.title}</h1>
                        <h1 className="courses__title">{coursesData?.title}</h1>
                        <p>
                            {coursesData?.description}
                        </p>
                    </div>
                    <div className="col-md-2" >
                        {/* <img src={coursesData?.image} className="courses__details__img" alt="img" /> */}
                    </div>
                </div>
            </div>
            <div className="courses__more__info">
                <div className="container-fluid p-5">
                    <h1 className="add__color">{coursesData?.subContentTitle}</h1>
                    <p>{coursesData?.subContentDescription}</p>
                    {coursesData?.subp && coursesData?.subp.map((value: any) => (
                        <div className="item-li"><li>{value}</li></div>
                    ))}
                    <div>
                        {coursesData?.composante && coursesData?.composante.map((value: any) => (
                            <div>
                                <h1 style={{ fontSize: "26px" }}>{value.title}</h1>
                                <p>{value.content}</p>
                            </div>
                        ))}

                        {coursesData?.images &&
                            <div className="card">
                                <img src={Banner1} />
                                <img src={Banner2} />
                            </div>
                        }
                    </div>

                </div>
            </div>
        </div >
    )
}

export default CoursesDetails;