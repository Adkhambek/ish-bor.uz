import React from 'react';


const Ad = () => {
    return (
        <section className="ad about">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6">
                        <h1>Reklama uchun biz bilan bog'lanish</h1>
                        <div className="color">
                            <p>Agar saytimizda reklama bermoqchi bo'lsangiz quydagi E-manzilga (hr@ish-bor.uz) murojat
                                qilishingiz mumkin! Murojatingizda batafsil mahsulot yoki xizmatingiz to'g'risida
                                ko'proq ma'lumot ko'rsatishingiz kerak bo'ladi.</p>
                        </div>
                        <p className="email"><b>E-manzil</b>: <a href="mailto:hr@ish-bor.uz"
                                                                 target="_blank">hr@ish-bor.uz</a></p>
                    </div>
                    <div className="col-6">
                        <h1>Свяжитесь с нами для рекламы</h1>
                        <div className="color">
                            <p>Если вы хотите разместить рекламу на нашем сайте, вы можете связаться со следующим
                                адресом электронной почты (hr@ish-bor.uz)! Вам нужно будет предоставить более подробную
                                информацию о вашем продукте или услуге в вашем приложении.</p>
                        </div>
                        <p className="email"><b>E-manzil</b>: <a href="mailto:hr@ish-bor.uz"
                                                                 target="_blank">hr@ish-bor.uz</a></p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Ad;
