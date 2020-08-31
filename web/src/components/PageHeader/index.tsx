import React from 'react';
import BackButton from '../BackButton';
import logoImg from '../../assets/images/logo.svg';

import './styles.css';
import { Link } from 'react-router-dom';

interface PageHeaderProps {
  title: string;
  description?: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => (
  <header className="page-header">
    <div className="top-bar-container">
      <BackButton routeTo="/home" />
      <Link to={'/home'}>
        <img src={logoImg} alt="Proffy" />
      </Link>
    </div>

    <div className="header-content">
      <strong>{props.title}</strong>
      {props.description && <p>{props.description}</p>}
      {props.children}
    </div>
  </header>
);

export default PageHeader;
