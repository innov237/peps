import React from 'react';
import './Footer.css';
import Logo from '../../assets/images/logo.png';
import { ImLocation, ImPhone } from "react-icons/im";
import { ImEnvelop } from "react-icons/im";
import BuildTitle from '../widgets/title_widget/TitleWidget';
const Footer: React.FC = () => {

 
    return (
        <div style={{ backgroundColor: "white" }}>
           
            <div className="my__footer bg__black">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 justify-content-center">
                            <div className="menu__title">
                                <h1>FLUX D'ACTUALITÉS RSS</h1>
                            </div>
                            <p>projet d'amelioration de l'efficacité de la dépense publique et du système statistique</p>
                            <p>
                            strengtehning public sector effectiveness and statistical capacity project
                            </p>
                        </div>
                        <div className="col-md-5 justify-content-center">
                            <div className="menu__title">
                                <h1>CONTACT</h1>
                            </div>
                            <p><ImPhone style={{ color: "#F6881F" }}></ImPhone> (+237) 694-989-770/696-569-092</p>
                            <p><ImEnvelop style={{ color: "#F6881F" }}></ImEnvelop> contact@pepsgov.cm</p>
                            <p><ImLocation style={{ color: "#F6881F" }}></ImLocation> Pont dragage, en face PNDP</p>
                        </div>
                        <div className="col-md-2 justify-content-center">
                            <div className="menu__title">
                                <h1></h1>
                            </div>
                            <img src={Logo} alt="logo" className="footer__logo" style={{ width: "100%" }} />
                        </div>
                    </div>
                </div>

            </div >

        </div >
    )
};

export default Footer;