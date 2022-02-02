import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import axios from "axios";
import API from "../API";
import Token from "../dashboardPages/Token";
import Header from "../components/Header";
import Footer from "../components/Footer";

const JobById = ({match}) => {
    const ID=match.params.id
    const link=`https://t.me/share/url?url=http://localhost:3000/ishlar/${ID}`
    const [jobs,setJobs]=useState({})
    useEffect(()=>{
        axios.get(API+`/employer/${ID}`,{
            headers: {
                'Authorization': Token
            }
        })
            .then((res)=>{
                setJobs(res.data.employer)
                console.log(res.data.employer)
            })
    },[])

    return (
        <>
            <Header/>
            <section className="job__id work__person">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-8 offset-2">
                            <div className="card">
                                <div className="card-header">
                                    <h5><span>Mutaxassislik turi:</span>{jobs.profession} / <span className="sub__span">{jobs.created_at}</span> / <span className="sub__span">ID:{jobs.id}</span></h5>
                                </div>
                                <div className="card-body">
                                    <div className="left">
                                        <h6><span>Yoshi:</span> {jobs.age}</h6>
                                        <h6><span>Ma'lumoti:</span>{jobs.qualification}</h6>
                                        <h6><span>Jinsi:</span>{jobs.gender}</h6>
                                        <h6><span>Maosh:</span>{jobs.salary}</h6>
                                        <NavLink to="/ishlar/page/1"><i className="fas fa-arrow-left"/> Ishlar</NavLink>
                                    </div>
                                    <div className="right">
                                        <h6><span>Ish turi:</span>{jobs.type}</h6>
                                        <h6><span>Ish tajribasi:</span>{jobs.experience}</h6>
                                        <h6><span>Shahar/viloyat:</span>{jobs.region}</h6>
                                        <a href={`tel:${jobs.tel}`}><i className="fas fa-phone-alt"/> Tel</a>
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

export default JobById;
