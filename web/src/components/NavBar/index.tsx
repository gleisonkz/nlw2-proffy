import React from 'react';
import { Link } from 'react-router-dom';

import BackButton from '../BackButton';

import logoImg from '../../assets/images/logo.svg';

import './styles.css';

interface NavBarProps {
  pageTitle: string;
}

const NavBar: React.FC<NavBarProps> = ({ pageTitle }) => {
  return (
    <section className="nav-bar">
      <BackButton routeTo="/home" />
      <span className="page-title">{pageTitle}</span>
      <Link to={'/home'}>
        <img className="logo" src={logoImg} alt="Proffy" />
      </Link>
    </section>
  );
};

export default NavBar;
