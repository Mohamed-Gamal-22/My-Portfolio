import React from 'react';
import style from "./SocialMedia.module.css";

export default function SocialMedia() {
  return (
    <>
        <div className={`${style.cont}`}>
            <a href="mailto:mogamall086@gmail.com" rel="noopener noreferrer" target="_blank"><i className={`fs-3 fa-regular fa-envelope ${style.i1}`}></i></a>
            <a href="https://www.linkedin.com/in/mohamed-gamal-2949a718b/" target="_blank" rel="noopener noreferrer"><i className={`fs-3 fa-brands fa-linkedin ${style.i2}`}></i></a>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/Mohamed-Gamal-22"><i className={`fs-3 fa-brands fa-github ${style.i3}`}></i></a>
        </div>
    </>
  )
}
