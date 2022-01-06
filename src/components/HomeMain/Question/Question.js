import React from 'react';
import './Question.css';
import faq_img from "../../../images/faq.svg";
const Question = () => {
    return (
        <section>
            <div className="container">
                <div className="faq-title text-center">
                    <h2>Frequently Asked Questions</h2>
                </div>
                <div className="row align-items-center">
                    <div className="col-lg-5 my-5 my-lg-0">
                        <div className="faq-img text-center text-lg-start">
                            <img src={faq_img} alt="faq_img" className='img-fluid' />
                        </div>
                    </div>
                    <div className="col-lg-6 ms-lg-auto">
                        <div className="accordion accordion-flush" id="accordionFlushExample">
                            <div className="accordion-item accordion-i">
                                <h2 className="accordion-header" id="flush-headingOne">
                                    <button className="accordion-button accordion-btn collapsed"
                                        type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne"
                                        aria-expanded="false" aria-controls="flush-collapseOne">
                                        Author and article information
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" className="accordion-collapse accordion-c collapse"
                                    aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body py-3 px-4 accordion-body-text">
                                        <p className="">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, qui reiciendis delectus, nobis doloribus quia cum alias ex distinctio minima iste corporis laudantium et? Quam consequuntur illum ut deleniti rem!
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item accordion-i">
                                <h2 className="accordion-header" id="flush-headingTwo">
                                    <button className="accordion-button accordion-btn collapsed"
                                        type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo"
                                        aria-expanded="false" aria-controls="flush-collapseOne">
                                        Author and article information
                                    </button>
                                </h2>
                                <div id="flush-collapseTwo" className="accordion-collapse accordion-c collapse"
                                    aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body py-3 px-4 accordion-body-text">
                                        <p className="">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, qui reiciendis delectus, nobis doloribus quia cum alias ex distinctio minima iste corporis laudantium et? Quam consequuntur illum ut deleniti rem!
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item accordion-i">
                                <h2 className="accordion-header" id="flush-headingThree">
                                    <button className="accordion-button accordion-btn collapsed"
                                        type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree"
                                        aria-expanded="false" aria-controls="flush-collapseOne">
                                        Author and article information
                                    </button>
                                </h2>
                                <div id="flush-collapseThree" className="accordion-collapse accordion-c collapse"
                                    aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body py-3 px-4 accordion-body-text">
                                        <p className="">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, qui reiciendis delectus, nobis doloribus quia cum alias ex distinctio minima iste corporis laudantium et? Quam consequuntur illum ut deleniti rem!
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item accordion-i">
                                <h2 className="accordion-header" id="flush-headingFour">
                                    <button className="accordion-button accordion-btn collapsed"
                                        type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour"
                                        aria-expanded="false" aria-controls="flush-collapseOne">
                                        Author and article information
                                    </button>
                                </h2>
                                <div id="flush-collapseFour" className="accordion-collapse accordion-c collapse"
                                    aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body py-3 px-4 accordion-body-text">
                                        <p className="">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, qui reiciendis delectus, nobis doloribus quia cum alias ex distinctio minima iste corporis laudantium et? Quam consequuntur illum ut deleniti rem!
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item accordion-i">
                                <h2 className="accordion-header" id="flush-headingFive">
                                    <button className="accordion-button accordion-btn collapsed"
                                        type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive"
                                        aria-expanded="false" aria-controls="flush-collapseOne">
                                        Author and article information
                                    </button>
                                </h2>
                                <div id="flush-collapseFive" className="accordion-collapse accordion-c collapse"
                                    aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body py-3 px-4 accordion-body-text">
                                        <p className="">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, qui reiciendis delectus, nobis doloribus quia cum alias ex distinctio minima iste corporis laudantium et? Quam consequuntur illum ut deleniti rem!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Question;