import React from 'react';

import logo from '../../assets/images/logo/logo.svg';
import landing from '../../assets/images/logo/landing.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import './styles.css';

const Landing: React.FC = () => {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logo} alt="Font Proffy Logo Image"/>
          <h2>Sua plataforma de estudos online.</h2>
        </div>
        
        <img 
          src={landing} 
          alt="Landing Image" 
          className="hero-image"
        />

        <div className="buttons-container">
          <a href="" className="study">
            <img src={studyIcon} alt="Study Icon"/>
            Estudar
          </a>

          <a href="" className="give-classes">
            <img src={giveClassesIcon} alt="Give Classes Icon"/>
            Dar Aulas
          </a>
        </div>

        <span className="total-connections">
          Total de 200 conexões já realizadas <img src={purpleHeartIcon} alt="Purple Heart Icon" />
        </span>
      </div>
    </div>
  );
}

export default Landing;
