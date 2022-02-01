import React from 'react';
import Home from "./pages/Home";
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
import CityWorkers from "./pages/CityWorkers";
import CityJobs from "./pages/CityJobs";



const App = () => {
    return (
        <>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/ishchi" exact component={SearchWorker}/>
                <Route path="/ishchilar/page/:id" exact component={Workers}/>
                <Route path="/ishchilar/:id" exact component={WorkerPerson}/>
                <Route path="/ish" exact component={SearchJobs}/>
                <Route path="/ishlar/page/:id" exact component={Jobs}/>
                <Route path="/ishlar/:id" exact component={JobById}/>
                <Route path="/ishchilar/region/:id" exact component={CityWorkers}/>
                <Route path="/ishlar/region/:id" exact component={CityJobs}/>

                <Route path="/about" exact component={About}/>
                <Route path="/service" exact component={Service}/>
                <Route path="/contact" exact component={Contact}/>
                <Route path="/terms" exact component={Terms}/>
                <Route path="/ad" exact component={Ad}/>

                <Route path="/login" exact component={Login}/>
                <Route path="/dashboard/employee/:id" exact component={Employee}/>
                <Route path="/dashboard/employer/:id" exact component={Employer}/>
                <Route path="/dashboard/employeeOld/:id" exact component={EmployeeOld}/>
                <Route path="/dashboard/employerOld/:id" exact component={EmployerOld}/>
            </Switch>
            <ToastContainer />


        </>
    );
};

export default App;
