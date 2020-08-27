import React from 'react';

import logoImg from '../../assets/images/logo.svg';

import './styles.css';

const Slogan: React.FC = () => {
  return (
    <>
      <article className="slogan">
        <div>
          <img src={logoImg} alt='Proffy' />
          <h2>Sua plataforma de estudos online.</h2>
        </div>
      </article>
    </>
  );
};

export default Slogan;
