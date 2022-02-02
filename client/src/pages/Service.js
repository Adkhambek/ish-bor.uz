import React from 'react';
import City from "../components/City";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Service = () => {
    return (
        <>
            <Header/>
            <section className="about">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-6">
                            <h1>Ishchilarga</h1>
                            <p>Xurmatli fuqaro, siz vaqtinchalik ishsiz yoki o'zingiz uchun qulay va ma'qul ish topishda
                                qiyinchiliklarga uchrayapsizmi. Tushkunlikga tushishning xojati yo'q. Biz sizga yordam
                                berishga tayyormiz. Saytdagi ish qidiryapman sahifasini ochib qanday ish qidirayotganingiz
                                haqidagi formani to'ldirib bizga yuboring va biz uni ko'rib chiqib bizdagi ish o'rinlarini
                                sizga taklif qilamiz.</p>
                        </div>
                        <div className="col-6">
                            <h1>Ishchi qidirayotkanlarga</h1>
                            <p>Siz davlat idoralari tashkilot rahbarimisiz yoki xususiy tadbirkorsiz va sizda kerakli
                                ishchilar mutaxassislar yetishmovchiligi bilan bog'liq muammolar bormi? Biz sizni
                                muammoyingizni tez va oson hal etishga va qimmatli vaqtingizni tejashingizga yordam beramiz.
                                Saytdagi ishchi qidiryapman sahifasini ochib qanday ishchi yoki mutaxassist
                                qidirayotganingiz haqidagi so'rovni yuboring va siz bilan bog'lanib bizdagi mavjud
                                variantlarni taklif qilamiz, yoki qidirib topamiz.</p>
                        </div>
                    </div>
                </div>
                <City/>
            </section>
            <Footer/>
        </>
    );
};

export default Service;
