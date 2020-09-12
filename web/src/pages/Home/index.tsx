import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import logOutButton from '../../assets/images/icons/log-out-button.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import api from '../../services/api';

import './styles.css';

const Home: React.FC = () => {
  const [totalConnections, setTotalConnections] = useState(0);

  const [fadeState, setFadeState] = useState('hidden');

  useEffect(() => {
    setFadeState('visible');
    api.get('connection/count').then((response) => {
      const { total } = response.data;
      setTotalConnections(total);
    });
  }, []);

  return (
    <>
      <section className={`home ${fadeState}`}>
        <main>
          <div className="avatar">
            <Link to="/profile" className="avatar-link">
              <img
                className="avatar-image"
                src="https://avatars0.githubusercontent.com/u/48810597?s=460&u=b6c5c0042fdba194cc3dd2dd3b94e86b07f36e87&v=4"
                alt=""
              />
              <span className="user-name">Gleison de Almeida</span>
            </Link>
          </div>

          <Link to="/users/sign-in" className="study">
            <img src={logOutButton} alt="Deslogar" />
          </Link>
          <div className="logo-container">
            <img src={logoImg} alt="Proffy" />
            <h2 className="description">Sua plataforma de estudos online.</h2>
          </div>
          <img
            src={landingImg}
            alt="Plataforma de Estudos"
            className="hero-image"
          />
        </main>
        <footer>
          <div className="welcome-message">
            <p>Seja bem-vindo.</p>
            <p>
              <strong>O que deseja fazer?</strong>
            </p>
          </div>

          <div className="total-connections">
            <p>Total de {totalConnections} conexões</p>
            <p>
              já realizadas
              <img src={purpleHeartIcon} alt="Coração Roxo" />
            </p>
          </div>

          <div className="buttons-container">
            <Link to="/study" className="study">
              <img src={studyIcon} alt="Estudar" />
              Estudar
            </Link>

            <Link to="/give-classes" className="give-classes">
              <img src={giveClassesIcon} alt="Dar Aulas" />
              Dar Aulas
            </Link>
          </div>
        </footer>
      </section>
    </>
  );

  // return (
  //   <div id="page-landing" className={`${fadeState}`}>
  //     <div id="page-landing-content" className="container">
  //       <div className="logo-container">
  //         <img src={logoImg} alt="Proffy" />
  //         <h2>Sua plataforma de estudos online.</h2>
  //       </div>

  //       <img
  //         src={landingImg}
  //         alt="Plataforma de Estudos"
  //         className="hero-image"
  //       />

  //       <div className="buttons-container">
  //         <Link to="/study" className="study">
  //           <img src={studyIcon} alt="Estudar" />
  //           Estudar
  //         </Link>

  //         <Link to="/give-classes" className="give-classes">
  //           <img src={giveClassesIcon} alt="Dar Aulas" />
  //           Dar Aulas
  //         </Link>
  //       </div>

  //       <span className="total-connections">
  //         Total de {totalConnections} conexões já realizadas{' '}
  //         <img src={purpleHeartIcon} alt="Coração Roxo" />
  //       </span>
  //     </div>
  //   </div>
  // );
};
export default Home;
