import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Carousel.css';
import Banner1 from "../../assets/images/1.jpg";
import Banner2 from "../../assets/images/2.jpg";

const CarouselBox: React.FC = () => (
    <div>
        <div className="carousel__row">
            <Carousel interval={4000}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Banner1} alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Projet <strong className="add__color">d'Amélioration</strong> de l’Efficacité de la Dépense public et du Système Statistique </h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Banner2} alt="First slide"
                    />

                    <Carousel.Caption>
                    <h3>strengtehning public sector <strong className="add__color">effectiveness</strong> and statistical capacity project</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    </div>

)

export default CarouselBox;