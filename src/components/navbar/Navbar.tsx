import React, { useState, useRef } from 'react';
import './Navbar.css';
import { NavDropdown, Nav } from 'react-bootstrap';
import LogoText from '../../assets/images/logo-text.png';
import Logo from '../../assets/images/logo.png';
import Datadocke from '../../assets/images/datadocke.png';
import Qualiopi from '../../assets/images/qualiopi.png';
import trainingData from '../../data/courses.json';
import { Link } from 'react-router-dom';
import { FaHome, FaSearch } from "react-icons/fa";

const APPNavBar: React.FC = () => {

    const [status, setStatus] = useState(trainingData.map(x => false));

    const updateStatus = (value: any, index: any) => {
        const clone = [...status];
        clone[index] = value;
        setStatus(clone);
    }

    const myRef = useRef<any>(null)
    const executeScroll = () => myRef.current.scrollIntoView()



    return (
        <div className="my__container">
            <div className="header__nav">
                <div className="logo__icon" onClick={() => executeScroll()}>
                    <Link to="/home"> <FaHome className="icon__large icon__white" /></Link>
                </div>
                <p className="header__text__link">
                    <Link to="/equipe"> <li className="hide__text">Equipe PEPS</li></Link>
                    <li className="divider">|</li>
                    <Link to="/contact"><li>Contact</li></Link>
                    <li className="divider">|</li>
                    <li>Tel:(+237) 694-989-770 / 696-569-092</li>
                </p>
                <p className="logo__text">PEPS</p>
            </div>
            <div className="row__logo">
                <div className="logo__brand" onClick={() => executeScroll()}>
                    <Link to="/home">
                        <img className="logo" src={LogoText} alt="logo" />
                    </Link>
                </div>
                <div className="rigth__row">
                    <div className="partner__logo">
                        <img className="logo__smal" src={Datadocke} alt="logo" />
                        <img className="logo__smal" src={Qualiopi} alt="logo" />
                        <img className="logo__smal" src="https://adaf-amc2.com/wp-content/uploads/2017/01/logo-minfi-cameroun.jpg" alt="logo" />
                        <img className="logo__smal" src="https://image.jimcdn.com/app/cms/image/transf/none/path/s808584e5371b6bc2/image/icdf971ce6921fb05/version/1554728087/image.jpg" alt="logo" />
                        <img className="logo__smal" src="http://www.pepsgov.cm/templates/peps/images/wb_logo.png" alt="logo" />
                        <img className="logo__smal" src="https://www.dynafac.org/images/members/image/minfof-ministere-des-forets-Cameroun-partner-dynafac.jpg" alt="logo" />
                        <img className="logo__smal" src="https://yt3.ggpht.com/ytc/AAUvwnix67Yqyd2y9imwHFjJ6GtQL-1ogpOeZ_vtQX4v=s900-c-k-c0x00ffffff-no-rj" alt="logo" />
                        <img className="logo" src={LogoText} alt="logo" />
                    </div>

                </div>
                <div className="search__bar">
                    <div className="input__row">
                        <input type="text" className="form-control" placeholder="Entrez un mot clé" />
                    </div>
                    <div className="search__btn">
                        <FaSearch className="icon__large icon__white" />
                    </div>
                </div>
            </div>
            <div className="navbar__nemu">
                <Nav.Item>
                    <Nav.Link href="#/home">Accueil</Nav.Link>
                </Nav.Item>
                {trainingData.map((training: any, index) => {
                    return (
                        <NavDropdown
                            onMouseOver={() => updateStatus(true, index)}
                            onMouseLeave={() => updateStatus(false, index)}
                            show={status[index]}
                            title={training.title}
                            id={training.id}
                            key={training.id}
                        >
                            {training.courses.map((element: any) =>
                                <NavDropdown.Item
                                    href={'#/page/' + training.id + "/" + element.id}
                                    key={element.id}
                                    onClick={() => { updateStatus(false, index) }}
                                >
                                    {element.title}
                                </NavDropdown.Item>
                            )}
                        </NavDropdown>
                    )
                })}
                <Nav.Item>
                    <Nav.Link href="#/contact">Contact</Nav.Link>
                </Nav.Item>
            </div>
            <div className="navbar__responsive">
                <div id="accordion">
                    {trainingData.map((training: any, index) => {
                        return (
                            <div className="nav__item" key={training.id}>
                                <div className="item" id={"headingTwo" + index}>
                                    <div className="btn item__link collapsed" data-toggle="collapse" data-target={"#collapseTwo" + index} aria-expanded="false" aria-controls={"collapseTwo" + index}>
                                        {training.title}
                                    </div>
                                    <div className="item__icon">
                                        +
                                    </div>
                                </div>
                                <div id={"collapseTwo" + index} className="collapse sub__link" aria-labelledby={"headingTwo" + index} data-parent="#accordion">
                                    {training.courses.map((element: any) =>
                                        <div className="sub__item__link" key={element.id}>
                                            <a className="sub__item__link__a" href={'#/page/' + training.id + "/" + element.id}>  {element.title}</a>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>

            <div ref={myRef}></div>
        </div>
    );
}


export default APPNavBar;