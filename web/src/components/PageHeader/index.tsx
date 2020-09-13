import React from 'react';

import Emoji from './../Emoji/index';

import './styles.css';

interface PageHeaderProps {
  title?: string;
  description?: string;
  icon?: string;
  textIcon?: string;
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
    {icon && <Emoji icon={icon} text={textIcon} />}
    <strong className="header-content-title">{title}</strong>
    <div className="header-content">
      {description && <p>{description}</p>}
      {children}
    </div>
  </header>
);

export default PageHeader;
