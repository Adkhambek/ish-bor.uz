import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import City from "../components/City";

const Jobs = () => {
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
            "telefon raqam":"94 123 31 32"
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
            "telefon raqam":"95 444 44 32"
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
            "telefon raqam":"97 888 88 88"
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
            "telefon raqam":"96 666 66 66"
        }
    ])
    const linkById='/ishlar'
    return (
        <section className="jobs workers">
            <City/>
            <div className="container-fluid">
                <h2 className="title-workers">Ishlar</h2>
                <p className="sub-title-workers">Quyida sizga kerakli ishni topishingiz mumkin!</p>
                <div className="row">
                    {
                        workers.map((item,index)=>{
                            return(
                                <div key={index.toString()} className="col-3">
                                    <div className="card">
                                        <div className="card-header">
                                            <h6><span>Mutaxassislik turi</span> :{item.ish}</h6>
                                        </div>
                                        <div className="card-body">
                                            <p>{item.shahar}</p>
                                            <h5><span>Yoshi :</span> {item.name} {item.yil}</h5>
                                            <h5><span>Maosh :</span> {item.maosh}</h5>
                                            <NavLink className="worker-link" to={`${linkById}/${item.id}`}>Batafsil <i className="fas fa-arrow-right"/></NavLink>
                                            <span>{item.sana}</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default Jobs;
