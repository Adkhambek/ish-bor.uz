import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import axios from "axios";
import API from "../API";
import Token from "../dashboardPages/Token";

const CityJobs = ({match}) => {
    const ID=match.params.id
    const city =(ID.charAt(0).toUpperCase() + ID.slice(1)).replace('-',' ');
    const [workers,setWorkers]=useState([])
    const linkById='/ishchilar'
    useEffect(()=>{
        axios.get(API+`/employee/region/${ID}/page/1`,{
            headers: {
                'Authorization': Token
            }
        })
            .then((res)=>{
                console.log(res)
            })
    })
    return (
        <section className="workers">
            <div className="container-fluid">
                <h1>Ishchi izlash {city}</h1>
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

export default CityJobs;
