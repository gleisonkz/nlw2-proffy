import React, { useEffect, useState } from 'react';

import './styles.css';

const LostPassword: React.FC = () => {
  const [fadeState, setFadeState] = useState("hidden");

  useEffect(() => {
    setFadeState("visible")
  }, []);
  return (
    <>
      <section className={`lost-password ${fadeState}`}>
        <h1>LostPassword</h1>
      </section>

    </>
  );
};

export default LostPassword;
