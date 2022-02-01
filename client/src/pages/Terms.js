import React from 'react';
import '../styles/about.css'
import City from "../components/City";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Terms = () => {
    return (
        <>
            <Header/>
            <section className="terms about">
                <div className="container-fluid">
                    <h1>Saytning shartlari</h1>
                    <p>Saytni shartlari quydagilardan iborat:</p>
                    <ol>
                        <li>
                            <p>Saytga sizni nomingizdan (tel. raqam va boshqa ma'lumotlaringizdan foydalanib) boshqa bir
                                shaxs e'lon joylashtirgan bo'lsa, administratsiya bundan javobgar bo'lmaydi.
                                Administratsiyaga e'lonning ID raqamini yuborib o'chirishlarini so'rang (E'lonni o'chirish
                                24 soat ichida bajariladi). E'lon saytdan o'chkan bo'lsa ham google yok yandex qidiruv
                                tizimlaridan voxt o'tishi bilan o'chadi.</p>
                        </li>
                        <li>
                            <p>Saytga boshqa bir shaxs tomonidan sizni nomingizdan (tel. raqam va boshqa ma'lumotlaringizdan
                                foydalanib) e'lon kiritilgan bo'lsa, e'lon kirituvchini IP adresini bilishingiz uchun Aloqa
                                bo'limiga o'tib e'lonning ID sini kiriting va Habaringiz degan katakga (IP adresini
                                bilmoqchiman) degan matn yuboring va biz siz ko'rsatkan emailga javob qaytaramiz.</p>
                        </li>
                        <li>
                            <p>Saytda to'ldirgan ma'lumotlaringiz saytda barchaga ko'rinib turadi bundan shikoyat
                                qilmaysiz.</p>
                        </li>
                        <li><p>
                            Agar saytga qo'ygan e'loningizni o'chirmoqchi bo'lsangiz Aloqa bo'limiga kirib formani
                            to'ldirasiz (E'loningizni ID sini yozish esdan chiqmasin) va bizga jo'nating.
                        </p></li>
                        <li><p>E'loningizni qayta-qayta qo'yavermang.</p></li>
                        <li><p>E'longizda O'zbekiston Respublikasini qonunlariga zid keladigan so'zlarni ishlatmang aks
                            xolsa sizni butunlay bloklab qo'yamiz va tegishli joylarga murojat qilamiz va ma'lumotlaringizni
                            beramiz.</p></li>
                    </ol>
                </div>
                <City/>
            </section>
            <Footer/>
        </>
    );
};

export default Terms;
