import React from 'react';

import './styles.css';

interface EmojiProps {
  icon: string;
  text?: string;
}

const Emoji: React.FC<EmojiProps> = ({ icon, text }) => {
  return (
    <>
      <section className="emoji">
        <img src={icon} alt="" />
        <p>{text}</p>
      </section>
    </>
  );
};

export default Emoji;
