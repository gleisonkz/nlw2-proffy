import React, { useState } from 'react';

import { Teacher, DayOfWeek } from '../../models/teacher';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import api from '../../services/api';
import './styles.css';

interface TeacherItemProps {
  teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  const testTeacher: Teacher = {
    id: 5,
    user_id: 5,
    subject: 'Biologia',
    cost: 25.0,
    name: 'Renato',
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRnYhsoYw_1Xdh3xawjqFeQK1mU_gpAlL4IAw&usqp=CAU',
    whatsapp: '31994490279',
    bio:
      'GitLocalize automatically keeps translations up to date by syncing with your repository.',
    lessonSchedule: [
      { weekDay: 0, from: '', to: '' },
      { weekDay: 1, from: '', to: '' },
      { weekDay: 2, from: '8', to: '15' },
      { weekDay: 3, from: '', to: '' },

      { weekDay: 5, from: '8', to: '14' },
    ],
  };

  const [scheduleDays, setScheduleDays] = useState([]);

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
        {testTeacher.lessonSchedule?.map(({ weekDay, from, to }) => (
          <div
            key={teacher.id}
            className={`schedule-card ${from && to ? '' : 'disabled'}`}
          >
            <header className="week-day">
              <span>Dia</span>
              <strong>{DayOfWeek[weekDay]}</strong>
            </header>
            <footer className="time">
              <span>Horário</span>
              <strong>
                {from && to && `${from}h`} - {to && `${to}h`}
              </strong>
            </footer>
          </div>
        ))}
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
