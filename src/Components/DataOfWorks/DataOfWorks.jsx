import React, { useState } from 'react';
import style from "./DataOfWorks.module.css";
import Works from './../Works/Works';
import buildingImg from "../../Images/building.png";
import angoraImg from "../../Images/angora.png";

export default function DataOfWorks() {
    const [allWorks] = useState([
        {
          id : 0,
          title: "Building Site", 
          usedTech: ["html", "html5", "css", "css3", "bootstrap4", "font-awesome", "google-fonts", "media query"],
          img : buildingImg,
          url : "https://building-project-mohamed-gamal-22.vercel.app/" 
        },
        {
          id : 1,
          title : "Angora Page",
          usedTech : ["html", "css", "html5", "css3", "fontawesome", "media-query", "bootstrap5"],
          img : angoraImg,
          url : "https://angora-page-mohamed-gamal-22.vercel.app/"
        }
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
