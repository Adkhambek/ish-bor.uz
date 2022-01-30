import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import City from "../components/City";
import axios from "axios";
import API from "../API";
import Token from "../dashboardPages/Token";

const Jobs = () => {
    const [workers,setWorkers]=useState([])
    useEffect(()=>{
        axios.get(API+"/employer/page/1",{
            headers: {
                'Authorization': Token
            }
        })
            .then((res)=>{
                setWorkers(res.data.data)
                console.log(res.data.data)
            })
    },[])
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
                                            <h6><span>Mutaxassislik turi</span> :{item.profession}</h6>
                                        </div>
                                        <div className="card-body">
                                            <p>{item.region}</p>
                                            <h5><span>Yoshi :</span> {item.age}</h5>
                                            <h5><span>Maosh :</span> {item.salary}</h5>
                                            <NavLink className="worker-link" to={`${linkById}/${item.id}`}>Batafsil <i className="fas fa-arrow-right"/></NavLink>
                                            <span>{item.created_at}</span>
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
