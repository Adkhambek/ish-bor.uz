import React,{useState,useEffect} from 'react';
import '../styles/workers.css'
import {NavLink} from "react-router-dom";
import City from "../components/City";
import axios from "axios";
import API from "../API";
import Token from "../dashboardPages/Token";

const Workers = () => {
    const [workers,setWorkers]=useState([])
    useEffect(()=>{
        axios.get(API+"/employee/page/1",{
            headers: {
                'Authorization': Token
            }
        })
            .then((res)=>{
                setWorkers(res.data.data)
            })
    },[])


    const linkById='/ishchilar'
    return (
        <section className="workers">
            <City/>
            <div className="container-fluid">
                <h2 className="title-workers">Ishchilar</h2>
                <p className="sub-title-workers">Quyida sizga kerakli ishchini topishingiz mumkin!</p>
                <div className="row">
                    {
                        workers.map((item,index)=>{
                            return(
                                <div key={index.toString()} className="col-3">
                                    <div className="card">
                                        <div className="card-header">
                                            <h6><span>Ishchini mutaxasisligi</span> :{item.profession}</h6>
                                        </div>
                                        <div className="card-body">
                                            <p>{item.shahar}</p>
                                            <h5><span>Ismi va yili :</span> {item.detail}</h5>
                                            <h5><span>Maosh :</span> {item.salary}</h5>
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

export default Workers;
