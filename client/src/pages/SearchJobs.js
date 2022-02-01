import React,{useState,useRef,useEffect} from 'react';
import City from "../components/City";
import axios from "axios";
import API from "../API";
import Token from "../dashboardPages/Token";
import {toast} from "react-toastify";
import Header from "../components/Header";
import Footer from "../components/Footer";

const SearchJobs = () => {
    const professionRef=useRef(null)
    const infoRef=useRef(null)
    const experienceRef=useRef(null)
    const salaryRef=useRef(null)
    const typeRef=useRef(null)
    const regionRef=useRef(null)
    const detailRef=useRef(null)
    const genderRef=useRef(null)
    const telRef=useRef(null)
    const job = (e) => {
      e.preventDefault()
        axios.post(API+"/employee",{
            profession:professionRef.current.value,
            qualification:infoRef.current.value,
            experience:experienceRef.current.value,
            salary:salaryRef.current.value,
            type:typeRef.current.value,
            region:regionRef.current.value,
            detail:detailRef.current.value,
            gender:genderRef.current.value,
            tel:telRef.current.value
        },{
            headers: {
                'Authorization': Token
            }
        })
            .then((res)=>{
                toast.success(res.data.message)
            })
    }
    return (
        <>
            <Header/>
            <section className="search__job search__worker">
                <div className="container-fluid">
                    <h2>ISH QIDIRYAPMAN</h2>
                    <form onSubmit={job}>
                        <div className="row">
                            <div className="col-4">
                                <p>Mutaxassislik turi *</p>
                                <input ref={professionRef} placeholder="Misol:Marketolog" type="text"/>
                                <p>Ma'lumoti *</p>
                                <select ref={infoRef}>
                                    <option value="Ma'lumot shart emas">Ma'lumot shart emas</option>
                                    <option value="O'rta">O'rta</option>
                                    <option value="Oliy">Oliy</option>
                                </select>
                                <p>Ish tajribasi *</p>
                                <select ref={experienceRef}>
                                    <option value="Shart emas ish tajribasi">Shart emas ish tajribasi</option>
                                    <option value="1-5">1-5 yil</option>
                                    <option value="5-10">5-10 yil</option>
                                    <option value="10-15">10-15 yil</option>
                                </select>
                            </div>
                            <div className="col-4">
                                <p>Maosh *</p>
                                <input ref={salaryRef} placeholder="Misol:500 000 dan 5 000 000 gacha" type="number"/>
                                <p>Ish turi *</p>
                                <select ref={typeRef}>
                                    <option value="Doimiy">Doyimiy</option>
                                    <option value="Vaqtincha">Vaqtincha</option>
                                    <option value="Ahamiyatsiz">Ahamiyatsiz</option>
                                </select>
                                <p>Shahar/viloyat *</p>
                                <select ref={regionRef}>
                                    <option value="toshkent-shahri">Toshkent shahar</option>
                                    <option value="toshkent-viloyati">Toshkent viloyati</option>
                                    <option value="andijon-viloyati">Andijon viloyati</option>
                                    <option value="buxoro-viloyati">Buxoro viloyati</option>
                                    <option value="fargona-viloyati">Fargʻona viloyati</option>
                                    <option value="jizzax-viloyati">Jizzax viloyati</option>
                                    <option value="xorazm-viloyati">Xorazm viloyati</option>
                                    <option value="namangan-viloyati">Namangan viloyati</option>
                                    <option value="navoiy-viloyati">Navoiy viloyati</option>
                                    <option value="qashqadaryo-viloyati">Qashqadaryo viloyati</option>
                                    <option value="qoraqalpogiston">Qoraqalpogʻiston</option>
                                    <option value="samarqand-viloyati">Samarqand viloyati</option>
                                    <option value="sirdaryo-viloyati">Sirdaryo viloyati</option>
                                    <option value="surxondaryo-viloyati">Surxondaryo viloyati</option>
                                </select>
                            </div>
                            <div className="col-4">
                                <p>Ismingiz va tug`ilgan yilingiz *</p>
                                <input ref={detailRef} placeholder="Misol:Ahrorov Mamarayim 2000-yil"/>
                                <p>Jinsi *</p>
                                <select ref={genderRef}>
                                    <option value="Erkak">Erkak</option>
                                    <option value="Ayol">Ayol</option>
                                </select>
                                <p>Telefon raqamingiz *</p>
                                <input
                                    ref={telRef}
                                    maxLength="9"
                                    placeholder="90 123 34 56"
                                    type="text"/>
                            </div>
                        </div>
                        <button type="submit">Yuborish</button>
                    </form>
                </div>
                <City/>
            </section>
            <Footer/>
        </>
    );
};

export default SearchJobs;
