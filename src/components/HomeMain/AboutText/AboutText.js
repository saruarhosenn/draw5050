import React from 'react';
import './AboutText.css';
import about_img from "../../../images/about.svg";
const AboutText = () => {
    return (
        <section className='about-section'>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 d-block d-lg-none">
                        <div className="about-text text-center">
                            <h2 className='mb-4'>About Us</h2>
                        </div>
                    </div>
                    <div className="col-lg-4 my-5 my-lg-0">
                        <div className="about-img text-center text-lg-start">
                            <img src={about_img} alt="about_img" className='img-fluid' />
                        </div>
                    </div>
                    <div className="col-lg-7 ms-lg-auto">
                        <div className="about-text">
                            <h2 className='mb-4 d-none d-lg-block'>About Us</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptas obcaecati quae sunt delectus nostrum dicta porro assumenda, quas natus iusto tenetur. Labore iusto voluptas eos quod vel illo dolores assumenda velit. A vero quasi ea nesciunt atque quia ratione, debitis officia soluta similique exercitationem optio, molestias sint deserunt dicta quidem quaerat dolore dolores labore eaque nam! Dolor rerum deserunt asperiores possimus repellendus minima ut maxime, qui quo similique enim tenetur consequatur nulla a iste debitis dolores explicabo quia eius iure sint et. Tempore temporibus officia distinctio non nesciunt nobis, numquam quam eaque earum. Suscipit voluptas quia quo sint impedit!
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptas obcaecati quae sunt delectus nostrum dicta porro assumenda, quas natus iusto tenetur. Labore iusto voluptas eos quod vel illo dolores assumenda velit. A vero quasi ea nesciunt atque quia ratione, debitis officia soluta similique exercitationem optio, molestias sint deserunt dicta quidem quaerat dolore dolores.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutText;