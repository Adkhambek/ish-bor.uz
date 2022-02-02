import React,{useState} from 'react';
import '../styles/top.css'
import { useHistory } from "react-router-dom";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
const Top = () => {
    const history = useHistory();
    const logOut = () => {
        localStorage.removeItem('ishToken')
        history.push("/login");
    }
    const [open,setOpen]=useState(false)
    const openModal = () => {
        setOpen(!open)
    }
    return (
        <>
            <section className="top">
                <div></div>
                <div className="d-flex align-items-center justify-content-start">
                    <div className="user">
                        <i className="fas fa-user"/>
                    </div>
                    <h6 onClick={()=>{openModal()}}>Log Out</h6>
                </div>
                <Modal open={open} onClose={openModal} center>
                    <h6 className="logout-text">Haqiqatdan ham xisobdan <br/> chiqishni xoxlaysizmi?</h6>
                    <div className="logout-div">
                        <button onClick={()=>{logOut()}} className="logout yes">Ha</button>
                        <button onClick={()=>{openModal()}} className="logout no">Yo'q</button>
                    </div>
                </Modal>
            </section>
        </>
    );
};

export default Top;
