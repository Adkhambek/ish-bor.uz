import React from 'react';
import {NavLink} from "react-router-dom";
import '../styles/left.css'

const Left = () => {
    return (
        <section className="left-dashboard">
            <NavLink to="/dashboard/employee" activeClassName="active-left"><i className="fas fa-users"/>New Employee</NavLink>
            <NavLink to="/dashboard/employer" activeClassName="active-left"><i className="fas fa-hand-holding-usd"/>New Employer</NavLink>
            <NavLink to="/dashboard/employeeOld" activeClassName="active-left"><i className="fas fa-user"/>Employee</NavLink>
            <NavLink to="/dashboard/employerOld" activeClassName="active-left"><i className="fas fa-hand-holding-usd"/>Employer</NavLink>
        </section>
    );
};

export default Left;
