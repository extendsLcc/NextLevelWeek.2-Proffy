import React from "react";

import logoImg from '../../assets/images/logo.svg';
import ladingImg from '../../assets/images/landing.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import './styles.css';

function Lading() {
    return (
        <div id="page-landing">

            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="Proffy"/>
                    <h2>Sua plataforma de estudos online</h2>
                </div>

                <img src={ladingImg} alt="Plataforma de estudos" className="hero-image"/>

                <div className="buttons-container">

                    <a href="" className="study">
                        <img src={studyIcon} alt="Estudar"/>
                        Estudar
                    </a>

                    <a href="" className="give-classes">
                        <img src={giveClassesIcon} alt="Dar aulas"/>
                        Dar Aulas
                    </a>

                </div>

                <span className="total-connection">
                    Total de 200 Conexões já realizadas
                    <img src={purpleHeartIcon} alt="Coração Roxo"/>
                </span>
            </div>
        </div>
    );
}

export default Lading;