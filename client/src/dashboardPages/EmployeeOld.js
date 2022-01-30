import React, {useEffect,useState} from 'react';
import Left from "./Left";
import Top from "./Top";
import axios from "axios";
import API from "../API";
import Token from "./Token";
import {toast} from "react-toastify";
import ClipLoader from "react-spinners/ClipLoader";

const EmployeeOld = () => {
    const [active,setActive]=useState(false)
    const [workers,setWorkers]=useState([])
    const [left,setLeft]=useState(0)
    useEffect(()=>{
        setActive(true)
        axios.get(API+"/employee/page/1",{
            headers: {
                'Authorization': Token
            }
        })
            .then((res)=>{
                setWorkers(res.data.data)
                setActive(false)
            })
    },[])
    const editStatus = (id) => {
        setLeft(id)
        axios.patch(API+`/employee/status/${id}`,{
            "status":0
        },{
            headers: {
                'Authorization': Token
            }
        })
            .then((res)=>{
                const deleteData=workers.filter((e)=>e.id !=id)
                setWorkers(deleteData)
                toast.success(res.data.message)
            })
    }
    const deleteEmployee = (id) => {
        axios.delete(API+`/employee/${id}`,{
            headers: {
                'Authorization': Token
            }
        })
            .then((res)=>{
                toast.info(res.data.message)
                const deleteData=workers.filter((e)=>e.id !=id)
                setWorkers(deleteData)
                console.log(res)
            })
    }
    return (
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
                                       <th>Detail</th>
                                       <th>Profession</th>
                                       <th>Region</th>
                                       <th>status</th>
                                       <th></th>
                                       <th></th>
                                   </tr>
                                   </thead>
                                   <tbody>
                                   {workers.map((item,index)=>{
                                       return(
                                           <tr key={index.toString()}>
                                               <td>{item.id}</td>
                                               <td>{item.detail}</td>
                                               <td>{item.profession}</td>
                                               <td>{item.region}</td>
                                               <td>
                                                   <div onClick={()=>{
                                                       editStatus(item.id)
                                                       console.log(item.id)
                                                       // console.log(left)
                                                   }} style={left===item.id?{backgroundColor:"#ccd7db"}:{backgroundColor:"#d0efd1"}} className="switch">
                                                       <div style={left===item.id?{left:"3px",backgroundColor:"#fff"}:{right:"3px",backgroundColor:"#12AF18"}} className="switch-square"/>
                                                   </div>
                                               </td>
                                               <td><i onClick={()=>{
                                                   // editEmployee(item)
                                               }} className="fas fa-pen"/></td>
                                               <td><i onClick={()=>{
                                                   deleteEmployee(item.id)
                                               }} className="fas fa-trash-alt"/></td>
                                           </tr>
                                       )
                                   })}
                                   </tbody>
                               </table>
                           </div>
                           }

                   </div>
               </div>
           </div>
        </section>
    );
};

export default EmployeeOld;
