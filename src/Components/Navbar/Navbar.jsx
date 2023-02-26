import React from 'react';
import { Link } from 'react-router-dom';
import style from "./Navbar.module.css";

export default function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
        <div className="container">
            <Link className="navbar-brand text-white fw-bold fs-4" to="">GEMY</Link>
            <button className={`${style.tog} navbar-toggler`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fa-solid fa-bars-staggered text-white fs-4"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className={`navbar-nav ms-auto`}>
                    <li className="nav-item">
                    <Link className={`${style.link} nav-link active`} aria-current="page" to="">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className={`${style.link} nav-link`} to="">About</Link>
                    </li>
                    <li className="nav-item">
                    <Link className={`${style.link} nav-link`}  to="">Skills</Link>
                    </li>
                    <li className="nav-item">
                    <Link className={`${style.link} nav-link`}  to="">Contact Us</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    </>
  )
}
