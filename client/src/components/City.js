import React from 'react';
import '../styles/city.css'
import {NavLink} from "react-router-dom";

const City = () => {
    const linkById='/ishchilar/region'
    // const [statistics,setStatistics]=useState([])
    // useEffect(()=>{
    //     axios.get(API+"/api/statistics")
    //         .then((res)=>{
    //             setStatistics(res.data.data)
    //         })
    //
    // }, [])
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
                                            <li><a href="">Toshkent shahar</a> </li>
                                            <li><a href="">Toshkent viloyati</a></li>
                                            <li><a href="">Andijon viloyati</a></li>
                                            <li><a href="">Buxoro viloyati</a></li>
                                            <li><a href="">Fargʻona viloyati</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-4">
                                        <ul>
                                            <li><a href="">Jizzax viloyati</a></li>
                                            <li><a href="">Xorazm viloyati</a></li>
                                            <li><a href="">Namangan viloyati</a></li>
                                            <li><a href="">Navoiy viloyati</a></li>
                                            <li><a href="">Qashqadaryo viloyati</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-4">
                                        <ul>
                                            <li><a href="">Qoraqalpogʻiston</a></li>
                                            <li><a href="">Samarqand viloyati</a></li>
                                            <li><a href="">Sirdaryo viloyati</a></li>
                                            <li><a href="">Surxondaryo viloyati</a></li>
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
