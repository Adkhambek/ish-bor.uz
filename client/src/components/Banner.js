import React from 'react';
import '../styles/banner.css'
import {NavLink} from "react-router-dom";

const Banner = () => {
    return (
        <section className="banner">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6">
                        <div className="card">
                            <div className="card-body">
                                <div>
                                    <h3>Ishchi qidiryapman</h3>
                                    <h6>Ishchi qidirish biz bilan juda ham oson!</h6>
                                    <div className="banner-first-image">
                                        <img src="./images/ishchi.png" alt=""/>
                                    </div>
                                    <div className="links">
                                        <NavLink to="/ishchi">Ishchi qidirish</NavLink>
                                        <NavLink to="/ishchilar/page/1">Ishchilar</NavLink>
                                    </div>
                                </div>
                                <div className="banner-second-image">
                                    <img src="./images/ishchi.png" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="card">
                            <div className="card-body">
                                <div>
                                    <h3>Ish qidiryapman</h3>
                                    <h6>Ish qidirish biz bilan samarali!</h6>
                                    <div className="banner-first-image">
                                        <img src="./images/ishchi2.png" alt=""/>
                                    </div>
                                    <div className="links">
                                        <NavLink to="/ish">Ish qidirish</NavLink>
                                        <NavLink to="/ishlar/page/1">Ishlar</NavLink>
                                    </div>
                                </div>
                                <div className="banner-second-image">
                                    <img src="./images/ishchi2.png" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
