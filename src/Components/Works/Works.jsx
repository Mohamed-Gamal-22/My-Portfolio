import React from 'react';
import style from "./Works.module.css";
import img from "../../Images/kelly-sikkema-4JxV3Gs42Ks-unsplash.jpg";

export default function Works() {
  return (
    <>
    <div className="container mt-5 py-5">
      <h2 className={`${style.our} `}>our works</h2>
      <div className="row g-3 my-5 py-4">
        <div className="col-lg-3 col-md-4 col-sm-6">
          <div className="item">
            <div class={`card ${style.card}`}>
              <img src={img} class="card-img-top" alt="img" />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div className="btn btn-danger">view page</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <div className="item">
            <div class={`card ${style.card}`}>
              <img src={img} class="card-img-top" alt="img" />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div className="btn btn-danger">view page</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <div className="item">
            <div class={`card ${style.card}`}>
              <img src={img} class="card-img-top" alt="img" />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div className="btn btn-danger">view page</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <div className="item">
            <div class={`card ${style.card}`}>
              <img src={img} class="card-img-top" alt="img" />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div className="btn btn-danger">view page</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <div className="item">
            <div class={`card ${style.card}`}>
              <img src={img} class="card-img-top" alt="img" />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div className="btn btn-danger">view page</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <div className="item">
            <div class={`card ${style.card}`}>
              <img src={img} class="card-img-top" alt="img" />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div className="btn btn-danger">view page</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
