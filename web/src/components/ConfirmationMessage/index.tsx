import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import doneIcon from "../../assets/images/icons/done.svg"

import './styles.css';

interface ConfirmationMessageProps {
  title: string,
  firstDescription: string
  secondDescription?: string
  buttonText: string
  buttonLink: string
}

const ConfirmationMessage: React.FC<ConfirmationMessageProps> = ({
  title,
  firstDescription,
  secondDescription,
  buttonText,
  buttonLink }) => {

  const [fadeState, setFadeState] = useState("hidden");

  useEffect(() => {
    setFadeState("visible")
  }, []);

  return (
    <>
      <>
        <section className={`confirmation-message ${fadeState}`}>
          <img src={doneIcon} alt="" />
          <h1>{title}</h1>
          <article>
            <p>{firstDescription}</p>
            <p>{secondDescription}</p>
          </article>

          <Link to={buttonLink}>
            {buttonText}
          </Link>
        </section>
      </>
    </>
  );
};

export default ConfirmationMessage;
