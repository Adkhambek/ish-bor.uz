import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import City from "../components/City";
import axios from "axios";
import API from "../API";
import Token from "../dashboardPages/Token";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ClipLoader from "react-spinners/ClipLoader";

const Jobs = () => {
    const [perPage,setPerPage]=useState(1)
    const [workers,setWorkers]=useState([])
    const [link,setLink]=useState('/ishlar/page')
    const [active,setActive]=useState(false)
    useEffect(()=>{
        setActive(true)
        axios.get(API+"/employer/page/1",{
            headers: {
                'Authorization': Token
            }
        })
            .then((res)=>{
                setWorkers(res.data.data)
                setActive(false)
            })
    },[])
    const linkById='/ishlar'
    const reqPage = (id) => {
        setActive(true)
        axios.get(API+`/employee/page/${id}`,{
            headers: {
                'Authorization': Token
            }
        })
            .then((res)=>{
                setWorkers(res.data.data)
                setActive(false)
            })
    }
    const [pages,setPages]=useState(0)
    const arr=[]
    useEffect(()=>{
        axios.get(API+'/employer/pages',{
            headers: {
                'Authorization': Token
            }
        })
            .then((res)=>{
                setPages(res.data.pages)
            })
    },[])
    for(let i=1;i<=pages;i++){
        arr.push(i)
    }
    return (
        <>
            <Header/>
            <section className="jobs workers">
                <City/>
                <div className="container-fluid">
                    <h2 className="title-workers">Ishlar</h2>
                    <p className="sub-title-workers">Quyida sizga kerakli ishni topishingiz mumkin!</p>
                    {active
                        ?
                        <div className="h-100 d-flex justify-content-center align-items-center">
                            <ClipLoader
                                loading={active}
                                color={"#01384D"}
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
                    }

                    <div className="links">
                        <NavLink
                            style={perPage===1?{display:"none"}:{display:""}}
                            onClick={()=>{
                                reqPage(perPage-1)
                                setPerPage(perPage-1)
                            }}
                            to={`${link}/${perPage-1}`}>
                            <i className="fas fa-chevron-left"/>
                        </NavLink>
                        {arr.map((item,index)=>{
                            return(
                                <NavLink
                                    onClick={()=>{
                                        reqPage(item)
                                        setPerPage(item)
                                    }}
                                    activeClassName="active"
                                    to={`${link}/${item}`}
                                    key={index.toString()}>{item}
                                </NavLink>
                            )
                        })}
                        <NavLink
                            style={perPage==arr.slice(-1)?{display:"none"}:{display:""}}
                            onClick={()=>{
                                reqPage(perPage+1)
                                setPerPage(perPage+1)
                            }}
                            to={`${link}/${perPage+1}`}><i className="fas fa-chevron-right"/></NavLink>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    );
};

export default Jobs;
