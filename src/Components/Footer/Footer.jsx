import React from 'react';
import style from "./Footer.module.css";

export default function Footer() {

    const backToTop = () => {
        window.scrollTo(0, 0)
    }

  return (
    <div className='mt-4 w-100 bg-dark text-white text-capitalize p-3'>
        <div className="container ">
            <div className=' w-100 h-100 d-flex justify-content-between align-items-center'>
                <p className='mb-0'>all rights reserved <span className='fw-bold text-danger'>mohamed gamal</span> &reg;  & copyright <span className='text-danger'>&copy;</span> March 2023</p>
                <p onClick={() => backToTop()} className={`position-relative mb-0 clc ${style.clc}`}>back to top <i className={`fa-solid fa-arrow-up ${style.arr}`}></i></p>
            </div>
        </div>
    </div>
  )
}
