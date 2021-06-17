import React, { useRef, useState } from 'react';
import { ImEnvelop, ImLocation, ImPhone } from "react-icons/im";
import './ContactPage.css';
import axios from 'axios';
import trainingData from '../../data/courses.json';
import { useForm } from 'react-hook-form';
import { useToasts } from 'react-toast-notifications';

const ContactPage: React.FC = () => {

    const myRef = useRef<any>(null)
    const executeScroll = () => myRef.current.scrollIntoView();

    const [showModal, setshowModal] = useState<Boolean>(true);

    React.useEffect(() => {
        executeScroll()
    }, []);


    // const API_URL = 'http://localhost/mail_api/index.php';
    const API_URL = 'http://desmathsformation.innov237.com/mail_api/index2.php';
    const { register, handleSubmit, watch, errors, reset } = useForm();
    const [isLoad, setisLoad] = useState<Boolean>(false);
    const { addToast } = useToasts();
    const [selectedCoursesData, setSelectedCoursesData] = useState<any>([]);

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
            <div className="contact__header" ref={myRef}>
                <div className="container">
                    <h1 style={{ color: "white" }}>Contactez-nous</h1>
                </div>
            </div>
            <div className="contact__container">
                <div className="container">
                    <div className="row mt-2">
                        <div className="col-md-4">
                            <div className="menu__title">
                                <h1 style={{ color: "black" }}>Contactez-nous</h1>
                            </div>
                            <p className="contact__form__text">Le projet PEPS résolument engagé dans l’atteinte de ses objectifs, a à cœur d’améliorer l’efficacité de la dépense publique et du système statistique. Le site web mise à votre disposition est l’un des outils de cette stratégie communicationnelle qui a pour but de mettre en exergue les actions peu connues mais souvent nombreuses réalisées par le PEPS. Support mailing disponibles 24h/24, 7jrs / 7</p>
                        </div>
                        <div className="col-md-8">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form">
                                    <h4 className="mb-4"></h4>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Votre nom" name="name" ref={register({ required: true })} />
                                        <span>{errors.name && "Veuillez entrer votre nom"}</span>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Votre prénom" name="prenom" ref={register({ required: true })} />
                                        <span>{errors.prenom && "Veuillez entrer votre prénom"}</span>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Votre email" name="email" ref={register({ required: true })} />
                                        <span>{errors.email && "Veuillez entrer votre email"}</span>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Votre téléphone" name="phone" ref={register({ required: false })} />
                                        <span>{errors.phone && "Veuillez entrer votre téléphone"}</span>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Sujet" name="subjet" ref={register({ required: true })} />
                                        <span>{errors.subjet && "Veuillez entrer le sujet "}</span>
                                    </div>
                                   
                                    <div className="form-group">
                                        <textarea className="form-control" rows={3} name="message" ref={register({ required: true })} placeholder="Message"></textarea>
                                        <span>{errors.message && "Veuillez entrer le message"}</span>
                                    </div>

                                    <div className="form-group mt-4">
                                        {!isLoad && <input type="submit" className="btn my-primary w-100" value="Envoyer" />}
                                        {isLoad && <input type="submit" className="btn my-primary w-100" value="Envoi en cours..." />}
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card contact__card">
                                <ImPhone className="contact__icon"></ImPhone>
                                <h1>Appelez nous</h1>
                                <p>Tél: (+237) 694-989-770/696-569-092/691-718-787/698-94-55-08</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card contact__card">
                                <ImLocation className="contact__icon"></ImLocation>
                                <h1>Adress</h1>
                                <p>Pont dragage, en face PNDP</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card contact__card">
                                <ImEnvelop className="contact__icon"></ImEnvelop>
                                <h1>Email</h1>
                                <p>contact@pepsgov.cm</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default ContactPage;