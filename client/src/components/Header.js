import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../styles/header.css";
const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState(false);
    useEffect(() => {
        window.onscroll = function () {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
    }, []);
    return (
        <header className={scrolled ? "shadow" : ""}>
            <div
                className={
                    scrolled
                        ? "top__header__main__div header__main__div"
                        : "header__main__div"
                }
            >
                <NavLink to="/" className="header__left">
                    <h6 className={scrolled ? "color" : ""}>ISH.UZ</h6>
                    <span className={scrolled ? "color" : ""}>
                        Ish va ishchi qidiring
                    </span>
                </NavLink>
                <button
                    onClick={() => {
                        setActive(!active);
                    }}
                    className="menu"
                >
                    <i className="fas fa-bars" />
                </button>
                <div className="header__right">
                    <NavLink
                        className={scrolled ? "color" : ""}
                        to="/ishchi"
                        activeClassName="active"
                    >
                        <img src="./images/search_worker.png" alt="" />
                        Ishchi qidirish
                    </NavLink>
                    <NavLink
                        className={scrolled ? "color" : ""}
                        to="/ishchilar/page/1"
                        activeClassName="active"
                    >
                        <img src="./images/workers.png" alt="" />
                        Ishchilar
                    </NavLink>
                    <NavLink
                        className={scrolled ? "color" : ""}
                        to="/ish"
                        activeClassName="active"
                    >
                        <img src="./images/search_job.png" alt="" />
                        Ish qidirish
                    </NavLink>
                    <NavLink
                        className={scrolled ? "color" : ""}
                        to="/ishlar/page/1"
                        activeClassName="active"
                    >
                        <img src="./images/jobs.png" alt="" />
                        Ishlar
                    </NavLink>
                </div>
                <div
                    className={
                        active ? "header__right second" : "header__right none"
                    }
                >
                    <NavLink
                        className={scrolled ? "color" : ""}
                        to="/ishchi"
                        activeClassName="active"
                    >
                        <img src="./images/search_worker.png" alt="" />
                        Ishchi qidirish
                    </NavLink>
                    <NavLink
                        className={scrolled ? "color" : ""}
                        to="/ishchilar/page/1"
                        activeClassName="active"
                    >
                        <img src="./images/workers.png" alt="" />
                        Ishchilar
                    </NavLink>
                    <NavLink
                        className={scrolled ? "color" : ""}
                        to="/ish"
                        activeClassName="active"
                    >
                        <img src="./images/search_job.png" alt="" />
                        Ish qidirish
                    </NavLink>
                    <NavLink
                        className={scrolled ? "color" : ""}
                        to="/ishlar/page/1"
                        activeClassName="active"
                    >
                        <img src="./images/jobs.png" alt="" />
                        Ishlar
                    </NavLink>
                </div>
            </div>
        </header>
    );
};

export default Header;
