import React from 'react';
import style from "./Works.module.css";

export default function Works({mywork}) {
  return (
    <>
      <div className="col-lg-3 col-md-6 col-sm-12">
        <div className={`item ${style.scale}`}>
          <div className={`card ${style.card}`}>
            <div className={`${style.imgcontainer}`}>
              <img src={mywork.img} className={`card-img-top ${style.topimg}`} alt="img" />
            </div>
            <div className="card-body">
              <h5 className="card-title">{mywork.title}</h5>
              <div className="card-text"><span className='text-danger fw-bold'>used technologies : </span> <ul className='d-flex flex-wrap my-1 list-unstyled'>{mywork.usedTech.map((tech, index) => <li className='mx-2' key={index}>{tech}</li>)}</ul></div>
              <div className="btn btn-danger mt-2"><a className='text-decoration-none text-white' rel="noreferrer" href={mywork.url} target="_blank">view page</a></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
