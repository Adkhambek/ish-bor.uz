import React from 'react';
import '../styles/footer.css'
import {NavLink} from "react-router-dom";

const Footer = () => {
    if (window.location.pathname==='/dashboard/employer' || window.location.pathname==='/dashboard/employee' || window.location.pathname==='/dashboard/employeeOld' | window.location.pathname==='/dashboard/employerOld'){
        return null
    }
    else {
        return (
            <footer>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-4">
                            <a className="main__link" href="">ISH.UZ</a>
                            <h6>Ishchi qidirish biz bilan juda ham oson va Ish qidirish <br/> biz bilan samarali!</h6>
                        </div>
                        <div className="col-3">
                            <h5>Menu</h5>
                            <NavLink to="/about">Biz haqimizda</NavLink>
                            <NavLink to="/service">Xizmatlarimiz</NavLink>
                            <NavLink to="/contact">Aloqa</NavLink>
                            <NavLink to="/terms">Saytning shartlari</NavLink>
                            <NavLink to="/ad">Reklama</NavLink>
                        </div>
                        <div className="col-3">
                            <h5>Havolalar</h5>
                            <NavLink to="/ishchi">Ishchi qidirish</NavLink>
                            <NavLink to="/ishchilar">Ishchilar</NavLink>
                            <NavLink to="/ish">Ish qidirish</NavLink>
                            <NavLink to="/ishlar">Ishlar</NavLink>
                        </div>
                        <div className="col-2 last__col">
                            <h5>Bizga qo'shiling</h5>
                            <a href="">
                                <i className="fab fa-telegram-plane"/>
                            </a>
                        </div>
                        <div className="col-12">

                        </div>
                        <div className="footer__end">
                            &copy; 2002 ISH.UZ  <span className="mx-2">|</span>  Barcha huquqlar himoyalangan.
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
};

export default Footer;
