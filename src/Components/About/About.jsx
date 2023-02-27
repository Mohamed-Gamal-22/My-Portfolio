import React from 'react';
import style from "./About.module.css";

export default function About() {

  return (
    <>
        <div className="container mt-5 px-5">
            <h2 className={`${style.about1} my-5 py-3`}>About Me</h2>
            <div className={`${style.cont} row p-5`}>
                <div className="col-lg-6 mb-5">
                    <div className="left">
                        <div className="skills pe-5">
                            <h3 className='mt-4 mb-3 text-uppercase fw-bold text-dark'>my skills</h3>
                            <div className="skill mb-3">
                                <div className={`${style.rate1} mb-1`}>
                                    <span>HTML / HTML5</span>
                                    <span>100%</span>
                                </div>
                                <div className={`${style.back}`}>
                                    <div className={`${style.front1}`}></div>
                                </div>
                            </div>
                            <div className="skill mb-3">
                                <div className={`${style.rate2} mb-1`}>
                                    <span>CSS / CSS3</span>
                                    <span>95%</span>
                                </div>
                                <div className={`${style.back}`}>
                                    <div className={`${style.front2}`}></div>
                                </div>
                            </div>
                            <div className="skill mb-3">
                                <div className={`${style.rate3} mb-1`}>
                                    <span>BOOTSTRAP5</span>
                                    <span>85%</span>
                                </div>
                                <div className={`${style.back}`}>
                                    <div className={`${style.front3}`}></div>
                                </div>
                            </div>
                            <div className="skill mb-3">
                                <div className={`${style.rate4} mb-1`}>
                                    <span>JAVASCRIPT / ES6</span>
                                    <span>93%</span>
                                </div>
                                <div className={`${style.back}`}>
                                    <div className={`${style.front4}`}></div>
                                </div>
                            </div>
                            <div className="skill mb-3">
                                <div className={`${style.rate5} mb-1`}>
                                    <span>JQUERY</span>
                                    <span>80%</span>
                                </div>
                                <div className={`${style.back}`}>
                                    <div className={`${style.front5}`}></div>
                                </div>
                            </div>
                            <div className="skill mb-3">
                                <div className={`${style.rate6} mb-1`}>
                                    <span>REACT JS</span>
                                    <span>90%</span>
                                </div>
                                <div className={`${style.back}`}>
                                    <div className={`${style.front6}`}></div>
                                </div>
                            </div>
                            <div className="skill mb-3">
                            <div className={`${style.rate7} mb-1`}>
                                    <span>PHOTOSHOP</span>
                                    <span>50%</span>
                                </div>
                                <div className={`${style.back}`}>
                                    <div className={`${style.front7}`}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="right">
                        <h3 className={`${style.about} mb-3 fw-bold text-uppercase`}>information</h3>
                        <div className='mb-4 pb-1'></div>
                        <p className='text-muted'>My name is Mohamed Gamal, and I work as a front-end developer for three years. I have three years of experience in this field,  I also worked as an <span className='fw-bold text-dark'>assistant teacher</span> for front-end development courses.</p>
                        <p className='text-muted'>Then I worked for <span className='fw-bold text-dark'>Huawei as a software engineer</span>  for a while, and then after that I entered the world of freelancing. I have many Of my own projects and I also have clients' projects</p>
                        <p className='text-muted'>I strive to develop myself all the time and study everything new in my field while doing my job efficiently</p>
                        <p className='text-muted'>Among my advantages is the delivery of projects and tasks at the required time and sometimes before that, which helps the client meet his needs ahead of time and helps me gain a good reputation</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
