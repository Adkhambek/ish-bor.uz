import React, {useEffect, useState} from 'react';
import '../styles/workPerson.css'
import {NavLink} from "react-router-dom";
import axios from "axios";
import API from "../API";
import Token from "../dashboardPages/Token";
import Header from "../components/Header";
import Footer from "../components/Footer";

const WorkerPerson = ({match}) => {
    const ID=match.params.id
    const link=`https://t.me/share/url?url=http://localhost:3000/ishchilar/${ID}`

    const [workers,setWorkers]=useState({})
    useEffect(()=>{
        axios.get(API+`/employee/${ID}`,{
            headers: {
                'Authorization': Token
            }
        })
            .then((res)=>{
                setWorkers(res.data.employee)
            })
    },[])
    return (
        <>
            <Header/>
            <section className="work__person">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-8 offset-2">
                            <div className="card">
                                <div className="card-header">
                                    <h5><span>Ishchini mutaxassisligi:</span>{workers.profession} / <span className="sub__span">{workers.created_at}</span> / <span className="sub__span">ID:{workers.id}</span></h5>
                                </div>
                                <div className="card-body">
                                    <div className="left">
                                        <h6><span>Ismi va yili:</span>{workers.detail}</h6>
                                        <h6><span>Ma'lumoti:</span>{workers.qualification}</h6>
                                        <h6><span>Jinsi:</span>{workers.gender}</h6>
                                        <h6><span>Maosh:</span>{workers.salary}</h6>
                                        <NavLink to="/ishchilar/page/1"><i className="fas fa-arrow-left"/> Ishchilar</NavLink>
                                    </div>
                                    <div className="right">
                                        <h6><span>Ish turi:</span>{workers.type}</h6>
                                        <h6><span>Ish tajribasi:</span>{workers.experience} yil</h6>
                                        <h6><span>Shahar/viloyat:</span>{workers.region}</h6>
                                        <a href={`tel:${workers.tel}`}><i className="fas fa-phone-alt"/> Tel</a>
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
            <Footer/>
        </>
    );
};

export default WorkerPerson;
