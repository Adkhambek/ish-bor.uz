import React,{useState} from 'react';
import {NavLink} from "react-router-dom";

const JobById = ({match}) => {
    const [workers,setWorkers]=useState([
        {
            "id":1,
            "sana":Date.now(),
            "ish":"sekretar",
            "yil":"10-20",
            "malumoti":"Oliy",
            "maosh":"1.000.000 - 7.000.000",
            "ishTuri": "Ahamiyatsiz",
            "ishTajriba":"1 yil",
            "shahar":"Toshkent shahar",
            "telefonraqam":"94 123 31 32"
        },
        {
            "id":2,
            "sana":Date.now(),
            "ish":"qorovul",
            "yil":"30-40",
            "malumoti":"O'rta",
            "maosh":"2.000.000 - 3.000.000",
            "ishTuri": "Ahamiyatsiz",
            "ishTajriba":"12 yil",
            "shahar":"Toshkent viloyati",
            "telefonraqam":"95 444 44 32"
        },
        {
            "id":3,
            "sana":Date.now(),
            "ish":"farrosh",
            "yil":"33-43",
            "malumoti":"shart emas",
            "maosh":"5.000.000 - 7.000.000",
            "ishTuri": "Doimiy",
            "ishTajriba":"9 yil",
            "shahar":"Andijon viloyati",
            "telefonraqam":"97 888 88 88"
        },
        {
            "id":4,
            "sana":Date.now(),
            "ish":"dasturchi",
            "yil":"18-28",
            "malumoti":"Shart emas",
            "maosh":"4.000.000 - 10.000.000",
            "ishTuri": "Doimiy",
            "ishTajriba":"4 yil",
            "shahar":"Toshkent shahar",
            "telefonraqam":"96 666 66 66"
        }
    ])
    const ID=match.params.id
    const link=`https://t.me/share/url?url=http://localhost:3000/ishlar/${ID}`
    const newWorker=workers.find((e)=>e.id==ID)
    return (
        <section className="job__id work__person">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-8 offset-2">
                        <div className="card">
                            <div className="card-header">
                                <h5><span>Mutaxassislik turi:</span>{newWorker.ish} / <span className="sub__span">{newWorker.sana}</span> / <span className="sub__span">ID:{newWorker.id}</span></h5>
                            </div>
                            <div className="card-body">
                                <div className="left">
                                    <h6><span>Yoshi:</span> {newWorker.yil}</h6>
                                    <h6><span>Ma'lumoti:</span>{newWorker.malumoti}</h6>
                                    <h6><span>Jinsi:</span>{newWorker.jinsi}</h6>
                                    <h6><span>Maosh:</span>{newWorker.maosh}</h6>
                                    <NavLink to="/ishlar"><i className="fas fa-arrow-left"/> Ishlar</NavLink>
                                </div>
                                <div className="right">
                                    <h6><span>Ish turi:</span>{newWorker.ishTuri}</h6>
                                    <h6><span>Ish tajribasi:</span>{newWorker.ishTajriba}</h6>
                                    <h6><span>Shahar/viloyat:</span>{newWorker.shahar}</h6>
                                    <a href={`tel:${newWorker.telefonraqam}`}><i className="fas fa-phone-alt"/> Tel</a>
                                    <div className="d-flex align-items-center justify-content-start mt-2">
                                        <h6><span>Baham ko'ring:</span></h6>
                                        <div className="shares">
                                            <a target="_blank" className="share" href={link}>
                                                <i className="fab fa-telegram-plane"/>
                                            </a>
                                        </div>
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

export default JobById;
