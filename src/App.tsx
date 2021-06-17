import React, { useState } from 'react';
import './App.css';
import APPNavBar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import HomePage from './pages/home_page/HomePage';
import {
  Switch,
  Route,
  HashRouter
} from "react-router-dom";
import CoursesDetails from './pages/courses_details_page/CoursesDetails';
import ContactPage from './pages/contact_page/ContactPage';
import Training from './pages/training_page/Training';
import { ToastProvider } from 'react-toast-notifications';
import Courses from './pages/courses_page/Courses';
import Teams from './pages/teams/Teams';


function App() {
  return (
    <div className="app">
      <ToastProvider>
        <HashRouter>
          <APPNavBar></APPNavBar>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/page/:idTraining/:idCourses" component={CoursesDetails} />
            <Route exact path="/formation-group/:idCourses" component={Courses} />
            <Route exact path="/contact" component={ContactPage} />
            <Route exact path="/equipe" component={Teams} />
            <Route exact path="/" component={HomePage} />
          </Switch>
          <Training></Training>
          <Footer></Footer>
        </HashRouter>
      </ToastProvider>
      {/* <div className="updated">
        <div className="box__update">
          <img src="https://i.pinimg.com/originals/6b/e3/69/6be369b11b50e0b1c3a2fea19ba7e2ba.png" alt="" />
          <p>
            Ce site est en cours de maintenance...
        </p>
        </div>
      </div> */}
    </div>

  );
}

export default App;
