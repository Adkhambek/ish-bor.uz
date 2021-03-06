import React, {useEffect, useRef, useState} from 'react';
import Left from "./Left";
import Top from  './Top'
import axios from "axios";
import API from "../API";
import Token from "./Token";
import ClipLoader from "react-spinners/ClipLoader";
import {toast} from "react-toastify";
import {NavLink} from "react-router-dom";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { useHistory } from "react-router-dom";

const Employer = () => {
    const history = useHistory();
    const [perPage,setPerPage]=useState(1)
    const professionRef=useRef(null)
    const infoRef=useRef(null)
    const experienceRef=useRef(null)
    const salaryRef=useRef(null)
    const typeRef=useRef(null)
    const regionRef=useRef(null)
    const ageRef=useRef(null)
    const genderRef=useRef(null)
    const telRef=useRef(null)
    const [employerOne,setEmployerOne]=useState({})
    const [open,setOpen]=useState(false)
    const openModal = () => {
        setOpen(!open)
    }
    const [left,setLeft]=useState(0)
    const [active,setActive]=useState(false)
    const [employer,setEmployer]=useState([])
    useEffect(()=>{
        setActive(true)
        axios.get(API+"/employer/new/page/1",{
            headers: {
                'Authorization': Token
            }
        })
            .then((res)=>{
                setEmployer(res.data.data)
                setActive(false)
            })
            .catch((err)=>{
                toast.error(err.response.data.error)
                history.push("/login");
            })
    },[])
    const reqPage = (id) => {
        setActive(true)
        axios.get(API+`/employer/new/page/${id}`,{
            headers: {
                'Authorization': Token
            }
        })
            .then((res)=>{
                setEmployer(res.data.data)
                setActive(false)
            })
            .catch((err)=>{
                toast.error(err.response.data.error)
                history.push("/login");
            })
    }
    const editStatus = (id) => {
        setLeft(id)
        axios.patch(API+`/employer/status/${id}`,{
            "status":1
        },{
            headers: {
                'Authorization': Token
            }
        })
            .then((res)=>{
                const deleteData=employer.filter((e)=>e.id !=id)
                setEmployer(deleteData)
                toast.success(res.data.message)
            })
    }
    const deleteEmployee = (id) => {
        axios.delete(API+`/employer/${id}`,{
            headers: {
                'Authorization': Token
            }
        })
            .then((res)=>{
                toast.info(res.data.message)
                const deleteData=employer.filter((e)=>e.id !=id)
                setEmployer(deleteData)
            })
    }

    const editEmployerId = (id) => {
        axios.get(API+`/employer/new/${id}`,{
            headers: {
                'Authorization': Token
            }
        })
            .then((res)=>{
                setEmployerOne(res.data.employer)
                openModal()

            })
    }
    const editEmployer = (e) => {
        e.preventDefault()
        axios.patch(API+`/employer/${employerOne.id}`,{
            profession:professionRef.current.value,
            qualification:infoRef.current.value,
            experience:experienceRef.current.value,
            salary:salaryRef.current.value,
            type:typeRef.current.value,
            region:regionRef.current.value,
            age:ageRef.current.value,
            gender:genderRef.current.value,
            tel:telRef.current.value
        },{
            headers: {
                'Authorization': Token
            }
        })
            .then((res)=>{
                console.log(res)
                toast.success(res.data.message)
                axios.get(API+`/employer/new/page/${perPage}`,{
                    headers: {
                        'Authorization': Token
                    }
                })
                    .then((res)=>{
                        setEmployer(res.data.data)
                        openModal()
                        setActive(false)
                    })
            })
    }

    const [link,setLink]=useState('/dashboard/employer')
    const [pages,setPages]=useState(0)
    const arr=[]
    useEffect(()=>{
        axios.get(API+'/employer/new/pages',{
            headers: {
                'Authorization': Token
            }
        })
            .then((res)=>{
                setPages(res.data.pages)
                console.log(res)
            })
    },[])
    for(let i=1;i<=pages;i++){
        arr.push(i)
    }
    if (localStorage.getItem('ishToken')){
        return (
            <>
                <section className="employee">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-2 p-0 m-0">
                                <Left/>
                            </div>
                            <div className="col-10 p-0 m-0">
                                <Top/>
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
                                    <div className="p-4">
                                        <table className="table">
                                            <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Age</th>
                                                <th>Profession</th>
                                                <th>Region</th>
                                                <th>status</th>
                                                <th></th>
                                                <th></th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {employer.map((item,index)=>{
                                                return(
                                                    <tr key={index.toString()}>
                                                        <td>{item.id}</td>
                                                        <td>{item.age}</td>
                                                        <td>{item.profession}</td>
                                                        <td>{item.region}</td>
                                                        <td>
                                                            <div onClick={()=>{
                                                                editStatus(item.id)
                                                            }} style={left!==item.id?{backgroundColor:"#ccd7db"}:{backgroundColor:"#d0efd1"}} className="switch">
                                                                <div style={left!==item.id?{left:"3px",backgroundColor:"#fff"}:{right:"3px",backgroundColor:"#12AF18"}} className="switch-square"/>
                                                            </div>
                                                        </td>
                                                        <td><i onClick={()=>{
                                                            editEmployerId(item.id)
                                                        }} className="fas fa-pen"/></td>
                                                        <td><i onClick={()=>{
                                                            deleteEmployee(item.id)
                                                        }} className="fas fa-trash-alt"/></td>
                                                    </tr>
                                                )
                                            })}
                                            </tbody>
                                        </table>
                                        {arr.length>1?
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
                                            </div>:""
                                        }

                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </section>
                <Modal open={open} onClose={openModal} center>
                    <div className="search__worker mt-0">
                        <form onSubmit={editEmployer}>
                            <div className="row">
                                <div className="col-4">
                                    <p>Mutaxassislik turi *</p>
                                    <input defaultValue={employerOne.profession} ref={professionRef} placeholder="Misol:Marketolog" type="text"/>
                                    <p>Ma'lumoti *</p>
                                    <select defaultValue={employerOne.qualification} ref={infoRef}>
                                        <option value="Ma'lumot shart emas">Ma'lumot shart emas</option>
                                        <option value="O'rta">O'rta</option>
                                        <option value="Oliy">Oliy</option>
                                    </select>
                                    <p>Ish tajribasi *</p>
                                    <select defaultValue={employerOne.experience} ref={experienceRef}>
                                        <option value="Shart emas ish tajribasi">Shart emas ish tajribasi</option>
                                        <option value="1-5">1-5 yil</option>
                                        <option value="5-10">5-10 yil</option>
                                        <option value="10-15">10-15 yil</option>
                                    </select>
                                </div>
                                <div className="col-4">
                                    <p>Maosh *</p>
                                    <input defaultValue={employerOne.salary} ref={salaryRef} placeholder="Misol:500 000 dan 5 000 000 gacha" type="text"/>
                                    <p>Ish turi *</p>
                                    <select defaultValue={employerOne.type} ref={typeRef}>
                                        <option value="Doimiy">Doyimiy</option>
                                        <option value="Vaqtincha">Vaqtincha</option>
                                        <option value="Ahamiyatsiz">Ahamiyatsiz</option>
                                    </select>
                                    <p>Shahar/viloyat *</p>
                                    <select defaultValue={employerOne.region} ref={regionRef}>
                                        <option value="toshkent-shahri">Toshkent shahar</option>
                                        <option value="toshkent-viloyati">Toshkent viloyati</option>
                                        <option value="andijon-viloyati">Andijon viloyati</option>
                                        <option value="buxoro-viloyati">Buxoro viloyati</option>
                                        <option value="fargona-viloyati">Farg??ona viloyati</option>
                                        <option value="jizzax-viloyati">Jizzax viloyati</option>
                                        <option value="xorazm-viloyati">Xorazm viloyati</option>
                                        <option value="namangan-viloyati">Namangan viloyati</option>
                                        <option value="navoiy-viloyati">Navoiy viloyati</option>
                                        <option value="qashqadaryo-viloyati">Qashqadaryo viloyati</option>
                                        <option value="qoraqalpogiston">Qoraqalpog??iston</option>
                                        <option value="samarqand-viloyati">Samarqand viloyati</option>
                                        <option value="sirdaryo-viloyati">Sirdaryo viloyati</option>
                                        <option value="surxondaryo-viloyati">Surxondaryo viloyati</option>
                                    </select>
                                </div>
                                <div className="col-4">
                                    <p>Yoshi *</p>
                                    <input defaultValue={employerOne.age} ref={ageRef} placeholder="Misol:20dan 30 gacha" type="number"/>
                                    <p>Jinsi *</p>
                                    <select defaultValue={employerOne.gender} ref={genderRef}>
                                        <option value="">Tanlang</option>
                                        <option value="Erkak">Erkak</option>
                                        <option value="Ayol">Ayol</option>
                                    </select>
                                    <p>Telefon raqamingiz *</p>
                                    <input
                                        defaultValue={employerOne.tel}
                                        ref={telRef}
                                        maxLength="9"
                                        placeholder="90 123 34 56"
                                        type="text"/>
                                </div>
                            </div>
                            <button type="submit">Tahrirlash</button>
                        </form>
                    </div>
                </Modal>
            </>
        );
    }
    else {
        return window.location='/login'
    }




};

export default Employer;
