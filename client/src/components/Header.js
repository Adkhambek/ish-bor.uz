import React,{useState,useEffect} from 'react';
import {NavLink} from "react-router-dom";
import '../styles/header.css'
const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        window.onscroll = function() {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
    }, []);

    if (window.location.pathname==='/dashboard/employer' || window.location.pathname==='/dashboard/employee' || window.location.pathname==='/dashboard/employeeOld' | window.location.pathname==='/dashboard/employerOld'){
        return null
    }
    else {
        return (
            <header className={scrolled?'shadow':''}>
                <div className={scrolled?"top__header__main__div header__main__div":"header__main__div"}>
                    <NavLink to="/" className="header__left">
                        <h6 style={scrolled?{color:"#fff"}:{color:"#01384D"}}>ISH.UZ</h6>
                        <span style={scrolled?{color:"#fff"}:{color:"#01384D"}}>Ish va ishchi qidiring</span>
                    </NavLink>
                    <div className="header__right">
                        <NavLink style={scrolled?{color:"#fff"}:{color:"#01384D"}} to="/ishchi" activeClassName="active">
                            <img src="./images/search_worker.png" alt=""/>
                            Ishchi qidirish
                        </NavLink>
                        <NavLink style={scrolled?{color:"#fff"}:{color:"#01384D"}} to="/ishchilar" activeClassName="active">
                            <img src="./images/workers.png" alt=""/>
                            Ishchilar
                        </NavLink>
                        <NavLink style={scrolled?{color:"#fff"}:{color:"#01384D"}} to="/ish" activeClassName="active">
                            <img src="./images/search_job.png" alt=""/>
                            Ish qidirish
                        </NavLink>
                        <NavLink style={scrolled?{color:"#fff"}:{color:"#01384D"}} to="ishlar" activeClassName="active">
                            <img src="./images/jobs.png" alt=""/>
                            Ishlar
                        </NavLink>
                    </div>
                </div>
            </header>
        );
    }

};

export default Header;
