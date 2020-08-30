import React, { useEffect, useState } from 'react';

import './styles.css';

const LostPasswordDone: React.FC = () => {
  const [fadeState, setFadeState] = useState("hidden");

  useEffect(() => {
    setFadeState("visible")
  }, []);
  return (
    <>
      <section className={`lost-password-done ${fadeState}`} >
        <h1>LostPasswordDone</h1>
      </section>

    </>
  );
};

export default LostPasswordDone;
