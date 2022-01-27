import React from 'react';
import '../styles/about.css'
import City from "../components/City";

const About = () => {
    return (
        <section className="about">
            <div className="container-fluid">
                <h1>Biz haqimizda</h1>
                <p>Inson dunyoga kelar ekan o'zi atrofidagi yaqinlari uchun va hayotini o'zi istaganday yo'lga qo'yish
                    farovonlikga yetishish uchun mehnat qilishi ishlashi kerak. Biz har doim ham o'zimiz uchun qulay va
                    ma'qul ishni topishda qiyinchiliklarga duch kelamiz. So'ngi yillarda axborot va telekommunikatsiya
                    davri boshlanganini xisobga olgan xolda, yurtdoshlarimiz o'zlari uchun qulay va ma'qul ishni
                    topishlari uchun ushbu loyiha ishga tushirildi. Shuningdek davlat idoralari tashkilot muassasa
                    rahbarlari yoki xususiy tadbirkor va boshqa ish beruvchilarga ham o'zlari uchun zarur va kerakli
                    ishchi yoki mutaxassislarni topishlari uchun yordam berishga tayyormiz.</p>
            </div>
            <City/>
        </section>
    );
};

export default About;
