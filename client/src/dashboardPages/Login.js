import React, {useState, useRef} from 'react';
import "../styles/login.css"
import ClipLoader from "react-spinners/ClipLoader";
import axios from "axios";
import {toast} from "react-toastify";
import API from "../API";
import { useHistory } from "react-router-dom";


const Login = () => {
    const nameRef = useRef(null)
    const passwordRef = useRef(null)
    const [active, setActive] = useState(false)
    const [eye, setEye] = useState(true)
    const history = useHistory();

    const submit = (e) => {
        e.preventDefault()
        setActive(true)
        axios.post(API + "/login", {
            username: nameRef.current.value,
            password: passwordRef.current.value,
        })
            .then((res) => {
                localStorage.setItem('ishToken', res.data.token)
                setActive(false)
                toast.success(res.data.status)
                history.push("/dashboard/employee");
            })
            .catch((err)=>{
                toast.error(err.response.data.error)
                setActive(false)
            })
            // .catch(function (error) {
            //     if (error.response) {
            //         toast.error(error.response.data.detail)
            //         toast.error(error.response.data.error)
            //
            //     }
            // });
    }
    return (
        <section className="login">
            <div className="container">
                <h2>Admin bo'limiga kirish</h2>
                <div className="row">
                    <div className="col-4 offset-4">
                        <div className="card">
                            <div className="card-body">
                                <form onSubmit={submit}>
                                    <input ref={nameRef} placeholder="username" type="text"/>
                                    <input className="password" ref={passwordRef} placeholder="password"
                                           type={eye ? "password" : "text"}/>
                                    <i onClick={() => {
                                        setEye(!eye)
                                    }} className={eye ? "fas fa-eye" : "fas fa-eye-slash"}/>
                                    {/*<i onClick={()=>{setEye(!eye)}} style={eye?{opacity:'0'}:{opacity:"1"}} className=/>*/}
                                    {
                                        active ?
                                            <div style={{marginTop: "40px"}}
                                                 className="w-100 d-flex align-items-center justify-content-center mb-3">
                                                <ClipLoader
                                                    loading={active}
                                                    color={"#01384D"}
                                                    size={30}
                                                />
                                            </div>
                                            :
                                            <button
                                                disabled={active}
                                                type="submit"
                                                // style={active?{opacity:"0.3"}:{opacity:"1"}}
                                            >
                                                <span>Kirish</span>
                                            </button>
                                    }


                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
