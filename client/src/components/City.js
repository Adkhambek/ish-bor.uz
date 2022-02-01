import React from 'react';
import '../styles/city.css'
import {NavLink} from "react-router-dom";

const City = () => {
    const linkById='/ishchilar/region'
    const linkByIdOne='/ishlar/region'
    return (
        <section className="city">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6">
                        <div className="card">
                            <div className="card-body">
                                <h6>Shahar va viloyatlar bo'yicha ishchilar</h6>
                                <div className="row">
                                    <div className="col-4">
                                        <ul>
                                            <li><NavLink to={`${linkById}/toshkent-shahri`}>Toshkent shahar</NavLink> </li>
                                            <li><NavLink to={`${linkById}/toshkent-viloyati`}>Toshkent viloyati</NavLink></li>
                                            <li><NavLink to={`${linkById}/andijon-viloyati`}>Andijon viloyati</NavLink></li>
                                            <li><NavLink to={`${linkById}/buxoro-viloyati`}>Buxoro viloyati</NavLink></li>
                                            <li><NavLink to={`${linkById}/fargona-viloyati`}>Fargʻona viloyati</NavLink></li>
                                        </ul>
                                    </div>
                                    <div className="col-4">
                                        <ul>
                                            <li><NavLink to={`${linkById}/jizzax-viloyati`}>Jizzax viloyati</NavLink></li>
                                            <li><NavLink to={`${linkById}/xorazm-viloyati`}>Xorazm viloyati</NavLink></li>
                                            <li><NavLink to={`${linkById}/namangan-viloyati`}>Namangan viloyati</NavLink></li>
                                            <li><NavLink to={`${linkById}/navoiy-viloyati`}>Navoiy viloyati</NavLink></li>
                                            <li><NavLink to={`${linkById}/qashqadaryo-viloyati`}>Qashqadaryo viloyati</NavLink></li>
                                        </ul>
                                    </div>
                                    <div className="col-4">
                                        <ul>
                                            <li><NavLink to={`${linkById}/qoraqalpogiston`}>Qoraqalpogʻiston</NavLink></li>
                                            <li><NavLink to={`${linkById}/samarqand-viloyati`}>Samarqand viloyati</NavLink></li>
                                            <li><NavLink to={`${linkById}/sirdaryo-viloyati`}>Sirdaryo viloyati</NavLink></li>
                                            <li><NavLink to={`${linkById}/surxondaryo-viloyati`}>Surxondaryo viloyati</NavLink></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="card">
                            <div className="card-body">
                                <h6>Shahar va viloyatlar bo'yicha ishlar</h6>
                                <div className="row">
                                    <div className="col-4">
                                        <ul>
                                            <li><NavLink to={`${linkByIdOne}/toshkent-shahri`}>Toshkent shahar</NavLink> </li>
                                            <li><NavLink to={`${linkByIdOne}/toshkent-viloyati`}>Toshkent viloyati</NavLink></li>
                                            <li><NavLink to={`${linkByIdOne}/andijon-viloyati`}>Andijon viloyati</NavLink></li>
                                            <li><NavLink to={`${linkByIdOne}/buxoro-viloyati`}>Buxoro viloyati</NavLink></li>
                                            <li><NavLink to={`${linkByIdOne}/fargona-viloyati`}>Fargʻona viloyati</NavLink></li>
                                        </ul>
                                    </div>
                                    <div className="col-4">
                                        <ul>
                                            <li><NavLink to={`${linkByIdOne}/jizzax-viloyati`}>Jizzax viloyati</NavLink></li>
                                            <li><NavLink to={`${linkByIdOne}/xorazm-viloyati`}>Xorazm viloyati</NavLink></li>
                                            <li><NavLink to={`${linkByIdOne}/namangan-viloyati`}>Namangan viloyati</NavLink></li>
                                            <li><NavLink to={`${linkByIdOne}/navoiy-viloyati`}>Navoiy viloyati</NavLink></li>
                                            <li><NavLink to={`${linkByIdOne}/qashqadaryo-viloyati`}>Qashqadaryo viloyati</NavLink></li>
                                        </ul>
                                    </div>
                                    <div className="col-4">
                                        <ul>
                                            <li><NavLink to={`${linkByIdOne}/qoraqalpogiston`}>Qoraqalpogʻiston</NavLink></li>
                                            <li><NavLink to={`${linkByIdOne}/samarqand-viloyati`}>Samarqand viloyati</NavLink></li>
                                            <li><NavLink to={`${linkByIdOne}/sirdaryo-viloyati`}>Sirdaryo viloyati</NavLink></li>
                                            <li><NavLink to={`${linkByIdOne}/surxondaryo-viloyati`}>Surxondaryo viloyati</NavLink></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default City;
