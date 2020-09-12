import React, { useState } from 'react';

import { Teacher, DayOfWeek } from '../../models/teacher';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import api from '../../services/api';
import './styles.css';
import { LessonSchedule } from './../../models/teacher';

interface TeacherItemProps {
  teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  const { lessonSchedule } = teacher;
  let [scheduleDays] = useState<LessonSchedule[]>([
    { weekDay: DayOfWeek.Domingo, from: '', to: '' },
    { weekDay: DayOfWeek.Segunda, from: '', to: '' },
    { weekDay: DayOfWeek.Terça, from: '', to: '' },
    { weekDay: DayOfWeek.Quarta, from: '', to: '' },
    { weekDay: DayOfWeek.Quinta, from: '', to: '' },
    { weekDay: DayOfWeek.Sexta, from: '', to: '' },
  ]);

  scheduleDays = scheduleDays.map((c) => {
    return (
      lessonSchedule?.find((d) => d.weekDay === c.weekDay) || {
        weekDay: c.weekDay,
        from: '',
        to: '',
      }
    );
  });

  function createNewConnection() {
    api.post('connection', {
      teacherID: teacher.teacherID,
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
        {scheduleDays.map(({ weekDay, from, to }) => (
          <div
            key={weekDay}
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
