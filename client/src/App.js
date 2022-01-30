import React from 'react';
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import SearchWorker from "./pages/SearchWorker";
import Workers from "./pages/Workers";
import SearchJobs from "./pages/SearchJobs";
import {Route,Switch} from "react-router-dom";
import Jobs from "./pages/Jobs";
import WorkerPerson from "./pages/WorkerPerson";
import JobById from "./pages/JobById";
import About from './pages/About'
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import Ad from "./pages/Ad";
import Login from "./dashboardPages/Login";
import "react-toastify/dist/ReactToastify.css";
import {ToastContainer} from "react-toastify";
import Employee from "./dashboardPages/Employee";
import Employer from "./dashboardPages/Employer";
import EmployerOld from "./dashboardPages/EmployerOld";
import EmployeeOld from "./dashboardPages/EmployeeOld";
import CityJobs from "./pages/CityJobs";



const App = () => {
    const link='asas'
    return (
        <>
                <Header/>
                    <main>
                        <Switch>
                            <Route path="/" exact component={Home}/>
                            <Route path="/ishchi" exact component={SearchWorker}/>
                            <Route path="/ishchilar" exact component={Workers}/>
                            <Route path="/ishchilar/:id" exact component={WorkerPerson}/>
                            <Route path="/ish" exact component={SearchJobs}/>
                            <Route path="/ishlar" exact component={Jobs}/>
                            <Route path="/ishlar/:id" exact component={JobById}/>
                            <Route path="/ishchilar/region/:id" exact component={CityJobs}/>

                            <Route path="/about" exact component={About}/>
                            <Route path="/service" exact component={Service}/>
                            <Route path="/contact" exact component={Contact}/>
                            <Route path="/terms" exact component={Terms}/>
                            <Route path="/ad" exact component={Ad}/>

                            <Route path="/login" exact component={Login}/>
                            <Route path="/dashboard/employee" exact component={Employee}/>
                            <Route path="/dashboard/employer" exact component={Employer}/>
                            <Route path="/dashboard/employeeOld" exact component={EmployeeOld}/>
                            <Route path="/dashboard/employerOld" exact component={EmployerOld}/>
                        </Switch>
                    </main>
                <Footer/>
            <ToastContainer />


        </>
    );
};

export default App;
