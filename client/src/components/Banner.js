import React from 'react';
import '../styles/banner.css'

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
                                    <div className="links">
                                        <a href="">Ishchi qidirish</a>
                                        <a href="">Ishchilar</a>
                                    </div>
                                </div>
                                <div>
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
                                    <div className="links">
                                        <a href="">Ish qidirish</a>
                                        <a href="">Ishlar</a>
                                    </div>
                                </div>
                                <div>
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
