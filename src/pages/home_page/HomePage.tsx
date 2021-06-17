import React, { useEffect, useState } from 'react';
import CarouselBox from '../../components/carousel/Carousel';
import './HomePage.css';
import Founder from '../../assets/images/coordo.jpg';
import Frflag from '../../assets/images/fr.png';
import Graduation from "../../assets/images/graduation.png";
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import { Security } from '@material-ui/icons';
import { ImBooks, ImHappy, ImUsers } from 'react-icons/im';
import { FaUserGraduate } from "react-icons/fa";
import { useForm } from "react-hook-form";
import axios from 'axios';
import trainingData from '../../data/courses.json';
import { useToasts } from 'react-toast-notifications';
import TopCourses from '../../components/topcourses/Topcourses';
import BuildTitle from '../../components/widgets/title_widget/TitleWidget';

const HomePage: React.FC = () => {

    // const API_URL = 'http://localhost/mail_api/index.php';
    const API_URL = 'http://desmathsformation.innov237.com/mail_api/index.php';
    const { register, handleSubmit, watch, errors, reset } = useForm();
    const [isLoad, setisLoad] = useState<Boolean>(false);
    const { addToast } = useToasts();
    const [selectedCoursesData, setSelectedCoursesData] = useState<any>([]);

    var lovers = ["ELIOR", "ISS", "ATALIAN", "STEM PROPRETE", "UNIVERSEL SERVICE", "EPS", "EPPSI", "GSF ARIES", "SODEXO SHP", "OMS SYNERGIE", "AGENET", "ARC EN CIEL ENVIRONNEMENT", "ONET", "SAMSIC","SEQUOIA","ÉTAT NEUF","OMS..."] ;

    const onSubmit = (data: any) => {
        data['courses'] = selectedCoursesData.toString();
        setisLoad(true);
        axios({
            method: "post",
            url: `${API_URL}`,
            headers: { 'content-type': 'application/json' },
            data: data,
        }).then((result: any) => {
            setisLoad(false);
            if (result.data.success) {
                reset();
                setSelectedCoursesData([]);
                addToast(result.data.message, { appearance: 'success', autoDismiss: true });
            } else {
                addToast(result.data.message, { appearance: 'error', autoDismiss: true });
            }
        }, (err: any) => {
            setisLoad(false);
            addToast("Une erreur est survenue. Veuillez réessayer", { appearance: 'error' });
        });

    };

    const selectValue = (e: any) => {
        setSelectedCoursesData([...selectedCoursesData, e.target.value]);
    }

    const removeItem = (index: any) => {
        const items = selectedCoursesData.filter((item: any, i: any) => i !== index);
        setSelectedCoursesData(items);
    }


    return (
        <div>
            <CarouselBox />

            <div className="well__come pb-0">

                <div className="founder__div">
                    <div className="row">
                        <div className="col-md-8 d-flex  flex-column justify-content-center">
                            <h2>Bienvenue</h2>
                            <h1>Mot de bienvenue du coordonnateur</h1>
                            <p className="welcome__text">
                             Le Projet d'Amélioration de l'Efficacité de la Dépense Publique et du Système Statistique (PEPS) résolument engagé dans l’atteinte de ses objectifs, tient à cœur d'augmenter  l’efficacité de la dépense publique et du système statistique. Sa mise en œuvre nécessite l’élaboration d’une politique de communication efficiente et efficace. Il est question ici de soutenir les aspects essentiels liés à l’efficacité du système  de Gestions de Finances Publiques (GFP) du Cameroun, en particulier  les dispositifs de passation de marchés publics d’exécution du budget  d’investissement et d’information financière. Il aboutira à un système  de gestion des finances plus transparent et mieux organisé.
                            </p>
                            <p className="welcome__text">
                              Le site web mis à votre disposition est l’un des outils de cette stratégie communicationnelle qui a pour but de  mettre en exergue les actions peu connues mais souvent nombreuses réalisées par le PEPS.  Pour s’arrimer  aux exigences de la modernité, le site web a été refondu et actualisé. Nous l’avons voulu plus réactif et maniable, plus riche et surtout plus en phase avec les exigences technologiques actuelles.
                            </p>
                           
                        </div>
                        <div className="col-md-4">
                            <div className="founder__row">
                                <div className="founder__image">
                                    <div className="rectangle__row"></div>
                                    <img src={Founder} alt="img" className="img__fd" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="option__row">
                      <p className="p-5 text-white">  Le visiteur  pourra assouvir sa soif de connaissances avec une actualité présentant les activités du PEPS, incluant les différents manuels et guides élaborés par ledit projet ceci composante par composante.</p>
                    </div>

                </div>

            </div>
            
            {/* <BuildTitle title="Ils nous ont fait confiance"></BuildTitle>

            <div className="lovers__row">
                <div className="row">
                    {lovers.map((result) => (
                        <div className="col-md-2">
                            <div className="lover__item">
                                {result}
                            </div>
                        </div>
                    ))}
                </div>
            </div> */}

        </div>
    )
}

export default HomePage;

