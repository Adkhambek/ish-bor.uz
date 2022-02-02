import React, {useEffect, useState} from 'react';
import axios from "axios";
import API from "../API";
import Token from "../dashboardPages/Token";
import {NavLink} from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import Header from "../components/Header";
import Footer from "../components/Footer";

const CityJobs = ({match}) => {
    const ID=match.params.id
    const city =(ID.charAt(0).toUpperCase() + ID.slice(1)).replace('-',' ');
    const [workers,setWorkers]=useState([])
    const [active,setActive]=useState(false)
    const linkById='/ishlar'
    useEffect(()=>{
        setActive(true)
        axios.get(API+`/employer/region/${ID}`,{
            headers: {
                'Authorization': Token
            }
        })
            .then((res)=>{
                setWorkers(res.data.data)
                setActive(false)
            })
    },[])
    return (
        <>
            <Header/>
            <section className="workers">
                <div className="container-fluid">
                    <h1 className="city-title"><span>Ish izlash</span> {city}</h1>
                    {
                        workers.length===0
                            ?
                            <div className="city-none">
                                <h1 className="city-title mt-5 text-danger">Afsuski bu viloyatda ish yo'q!!!</h1>
                                <NavLink className="worker-link-city" to="/ishlar/page/1"><i className="fas fa-arrow-left"/>Ishlar</NavLink>
                            </div>
                            :
                            <div>
                                {active
                                    ?
                                    <div className="h-100 d-flex justify-content-center align-items-center">
                                        <ClipLoader
                                            loading={active}
                                            color={"#EABF9F"}
                                            size={200}
                                        />
                                    </div>
                                    :
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
                                                                <h5><span>Ismi va yili :</span> {item.detail}</h5>
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

                                }
                                <NavLink className="worker-link-city" to="/ishlar/page/1"><i className="fas fa-arrow-left"/>Ishlar</NavLink>
                            </div>
                    }

                </div>

            </section>
            <Footer/>
        </>
    );
};

export default CityJobs;
