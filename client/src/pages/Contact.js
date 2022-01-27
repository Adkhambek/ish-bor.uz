import React from 'react';
import '../styles/about.css'
import City from "../components/City";

const Contact = () => {
    return (
        <section className="contact about">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6">
                        <h1>Aloqa</h1>
                        <div className="color">
                            <p>Agar qo'ygan ma'lumotlaringizni o'chirish yoki to'g'rilash kerak bo'lsa qo'ygan
                                e'loningizni ID sini quydagi emailga yuboring. Email matnida maqsadingizni to'liq yozib
                                qoldiring!</p>
                        </div>
                        <p className="email"><b>E-manzil</b>: <a href="mailto:hr@ish-bor.uz" target="_blank">hr@ish-bor.uz</a></p>
                    </div>
                    <div className="col-6">
                        <h1>Biz bilan bog'laning</h1>
                        <div className="row">
                            <div className="col-6">
                                <input placeholder="Ismingiz*" type="text"/>
                                <input placeholder="E-manzil*" type="email"/>
                                <input placeholder="Tel raqami*" type="number"/>
                            </div>
                            <div className="col-6">
                                <input placeholder="ID*" type="text"/>
                                <input placeholder="Xabaringiz*" type="text"/>
                                <button className="submit-button">Yuboring</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <City/>
        </section>
    );
};

export default Contact;
