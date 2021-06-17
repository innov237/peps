import React, { useEffect, useRef } from 'react';
import { ImEnvelop, ImLocation, ImPhone } from 'react-icons/im';
import Team1 from '../../assets/images/tm1.png';
import Team2 from '../../assets/images/tm2.png';
import Team3 from '../../assets/images/tm3.png';
import Team4 from '../../assets/images/tm4.png';
import Team5 from '../../assets/images/tm5.png';
import Team6 from '../../assets/images/tm6.png';
import Team7 from '../../assets/images/tm7.png';

import './Teams.css';

const Teams: React.FC = () => {

    const myRef = useRef<any>(null)

    const executeScroll = () => myRef.current.scrollIntoView()

    useEffect(() => {
        executeScroll();
    }, [])


    var teamsData = [
        {
            'image': "http://www.pepsgov.cm/images/respofiles//image14.jpg",
            "name": "M.GUEMALEU Guy",
            "job": "Coordonateur",
        },
        {
            'image': "http://www.pepsgov.cm/images/respofiles//image2.jpg",
            "name": "NOUBI TCHOUANGUEN",
            "job": "Agent de courrier",
        },
        {
            'image': "http://www.pepsgov.cm/images/respofiles//image7.jpg",
            "name": "DEUTOU Michel",
            "job": "Assistant suivi-évaluation",
        },
        {
            'image': "http://www.pepsgov.cm/images/respofiles//image5.jpg",
            "name": "Mme TCHOKONTE NONGA",
            "job": "Assistante en communication",
        },
        {
            'image': "http://www.pepsgov.cm/images/respofiles//image6.jpg",
            "name": "Mme SIPPE ANNE",
            "job": "Assistante passation de marché",
        },
        {
            'image': "http://www.pepsgov.cm/images/respofiles//image4.jpg",
            "name": "Mme BIDINE HELENE",
            "job": "Assistante de projet",
        },

    ]

    return (
        <div className="teams__row" ref={myRef}>

            <div className="container-fluid">
                <h1 className="mt-2 mb-5 text-center">
                    Responsables du PEPS:
                </h1>

                <div className="row">
                    {teamsData.map((teams: any) => (
                        <div className="col-md-4">
                            <div className="team__card">
                                <img src={teams.image} className="teams__image" alt="image" />
                                <h1>{teams.name}</h1>
                                <p>{teams.job}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <h1 className="mt-5 mb-5 text-center">
                Contactez-nous
            </h1>
            <div className="row mt-5">


                <div className="col-md-4">
                    <div className="card contact__card">
                        <ImPhone className="contact__icon"></ImPhone>
                        <h1>Appelez nous</h1>
                        <p>Tél:01.71.60.16.54/06.29.35.71.37</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card contact__card">
                        <ImLocation className="contact__icon"></ImLocation>
                        <h1>Adresse</h1>
                        <p>63 bis, Rue de la Tombe Issoire – 75014  Paris</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card contact__card">
                        <ImEnvelop className="contact__icon"></ImEnvelop>
                        <h1>Email</h1>
                        <p> contact@desmathsformation.com</p>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Teams;