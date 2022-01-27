import React from 'react';
import '../styles/searchWorker.css'
import City from "../components/City";

const SearchWorker = () => {
    return (
        <section className="search__worker">
            <div className="container-fluid">
                <h2>ISHCHI QIDIRYAPMAN</h2>
                <div className="row">
                    <div className="col-4">
                        <p>Mutaxassislik turi *</p>
                        <input placeholder="Misol:Marketolog" type="text"/>
                        <p>Ma'lumoti *</p>
                        <select>
                            <option value="tanlang">Tanglang</option>
                            <option value="volvo">Ma'lumot shart emas</option>
                            <option value="saab">O'rta</option>
                            <option value="opel">Oliy</option>
                        </select>
                        <p>Ish tajribasi *</p>
                        <select>
                            <option value="">Tanglang</option>
                            <option value="">Shart emas ish tajribasi</option>
                            <option value="1-5">1-5 yil</option>
                            <option value="">5-10 yil</option>
                            <option value="">10-15 yil</option>
                        </select>
                    </div>
                    <div className="col-4">
                        <p>Maosh *</p>
                        <input placeholder="Misol:500 000 dan 5 000 000 gacha" type="number"/>
                        <p>Ish turi *</p>
                        <select>
                            <option value="">Tanlang</option>
                            <option value="">Doyimiy</option>
                            <option value="">Vaqtincha</option>
                            <option value="">Ahamiyatsiz</option>
                        </select>
                        <p>Shahar/viloyat *</p>
                        <select>
                            <option value="">Tanlang</option>
                            <option value="">Toshkent shahar</option>
                            <option value="">Toshkent viloyati</option>
                            <option value="">Andijon viloyati</option>
                            <option value="">Buxoro viloyati</option>
                            <option value="">Fargʻona viloyati</option>
                            <option value="">Jizzax viloyati</option>
                            <option value="">Xorazm viloyati</option>
                            <option value="">Namangan viloyati</option>
                            <option value="">Navoiy viloyati</option>
                            <option value="">Qashqadaryo viloyati</option>
                            <option value="">Qoraqalpogʻiston</option>
                            <option value="">Samarqand viloyati</option>
                            <option value="">Sirdaryo viloyati</option>
                            <option value="">Surxondaryo viloyati</option>
                        </select>
                    </div>
                    <div className="col-4">
                        <p>Yoshi *</p>
                        <input placeholder="Misol:20dan 30 gacha" type="number"/>
                        <p>Jinsi *</p>
                        <select>
                            <option value="">Tanlang</option>
                            <option value="">Erkak</option>
                            <option value="">Ayol</option>
                        </select>
                        <p>Telefon raqamingiz *</p>
                        <input
                            maxLength="9"
                            placeholder="90 123 34 56"
                            type="text"/>
                    </div>
                </div>
            </div>
            <City/>
        </section>
    );
};

export default SearchWorker;
