import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import backIcon from '../../assets/images/icons/back.svg';

import './styles.css';
interface BackButtonProps {
  routeTo: string;
}

const BackButton: React.FC<BackButtonProps> = (props: BackButtonProps) => {
  return (
    <>
      <Link to={props.routeTo}>
        <img className="backButtonImg" src={backIcon} alt="Voltar" />
      </Link>
    </>
  );
};

export default BackButton;
