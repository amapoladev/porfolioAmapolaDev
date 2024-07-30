import React from "react";
import "./sectionTop.css";
import LogoCompany from '../../../assets/images/AD.svg'


const SectionTop = () => {
  return (
    <>
      <div class="section-top">
        <div class="section-top-name"> 
          <h1 className="section-top-nameCompany">Amapola Dev</h1>
        </div>
        <div class="section-top-image">
          <img src={LogoCompany} alt="Logo amapoladev" className="section-top-imageLogo" />
        </div>
        <div class="section-top-text"> </div>
      </div>
    </>
  );
};

export default SectionTop;
