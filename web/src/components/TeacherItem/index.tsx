import React from 'react';

import { Teacher } from '../../models/teacher';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import api from '../../services/api';
import './styles.css';

interface TeacherItemProps {
  teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  function createNewConnection() {
    api.post('connections', {
      user_id: teacher.id,
    });
  }

  return (
    <article className="teacher-item">
      <header>
        <img src={teacher.avatar} alt={teacher.name} />
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>

      <p>{teacher.bio}</p>
      <article className="schedule-container">
        <div className="schedule-card">
          <header className="week-day">
            <span>Dia</span>
            <strong>Segunda</strong>
          </header>
          <footer className="time">
            <span>Horário</span>
            <strong>8h - 18h</strong>
          </footer>
        </div>

        <div className="schedule-card">
          <header className="week-day">
            <span>Dia</span>
            <strong>Segunda</strong>
          </header>
          <footer className="time">
            <span>Horário</span>
            <strong>8h - 18h</strong>
          </footer>
        </div>

        <div className="schedule-card">
          <header className="week-day">
            <span>Dia</span>
            <strong>Segunda</strong>
          </header>
          <footer className="time">
            <span>Horário</span>
            <strong>8h - 18h</strong>
          </footer>
        </div>

        <div className="schedule-card">
          <header className="week-day">
            <span>Dia</span>
            <strong>Segunda</strong>
          </header>
          <footer className="time">
            <span>Horário</span>
            <strong>8h - 18h</strong>
          </footer>
        </div>

        <div className="schedule-card">
          <header className="week-day">
            <span>Dia</span>
            <strong>Segunda</strong>
          </header>
          <footer className="time">
            <span>Horário</span>
            <strong>8h - 18h</strong>
          </footer>
        </div>
      </article>

      <footer>
        <p>
          Preço/hora
          <strong>R$: {teacher.cost}</strong>
        </p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          onClick={createNewConnection}
          href={`https://wa.me/${teacher.whatsapp}`}
        >
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </a>
      </footer>
    </article>
  );
};

export default TeacherItem;
