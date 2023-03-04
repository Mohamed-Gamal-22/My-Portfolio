import React, { useState } from 'react';
import style from "./DataOfWorks.module.css";
import Works from './../Works/Works';
import buildingImg from "../../Images/building.png";

export default function DataOfWorks() {
    const [allWorks] = useState([
        {
            id : 0,
            title: "Building site", 
            usedTech: ["html", "html5", "css", "css3", "bootstrap",         "font-awesome", "google-fonts"],
            img : buildingImg,
            url : "https://building-project.vercel.app/" 
        },
    ])
    
  return (
    <div className="container mt-5 py-5">
        <div className="row g-3 my-5 py-4">
            <h2 className={`${style.our} mb-5`}>our works</h2>
            {allWorks.length > 0 ? allWorks.map((work, index) =>
            <Works mywork={work} key={index}/>) : ""}
         </div>
    </div>
  )
}
