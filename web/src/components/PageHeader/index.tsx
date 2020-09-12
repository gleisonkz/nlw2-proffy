import React from 'react';
import BackButton from '../BackButton';
import logoImg from '../../assets/images/logo.svg';

import './styles.css';
import { Link } from 'react-router-dom';
import Emoji from './../Emoji/index';

interface PageHeaderProps {
  title: string;
  description?: string;
  icon: string;
  textIcon: string;
  pageTitle: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  description,
  icon,
  textIcon,
  pageTitle,
  children,
}) => (
  <header className="page-header">
    <div className="top-bar-container">
      <BackButton routeTo="/home" />
      <span className="page-title">{pageTitle}</span>
      <Link to={'/home'}>
        <img className="logo" src={logoImg} alt="Proffy" />
      </Link>
    </div>
    <Emoji icon={icon} text={textIcon} />
    <strong className="header-content-title">{title}</strong>
    <div className="header-content">
      {description && <p>{description}</p>}
      {children}
    </div>
  </header>
);

export default PageHeader;
