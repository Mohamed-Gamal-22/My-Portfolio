import React from 'react';
import AnimateMouse from '../AnimateMouse/AnimateMouse';
import style from "./Header.module.css";

export default function Header() {
  return (
    <>
      <div className={`${style.bg}`}>
          <div className={`${style.over}`}></div>
          <div className={`${style.cont} text-white text-center text-capitalize`}>
              <p className='fs-5 mb-2'>hello I'm</p>
              <h1 className={`fw-bold text-uppercase text-danger mb-2 ${style.name}`}>Mohamed Gamal</h1>
              <h5>Professional web developer</h5>
          </div>
      </div>
      <AnimateMouse />
    </>
  )
}

